import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { StatusCodes } from "http-status-codes";

import { prisma } from "@/lib/prisma";
import { env } from "@/lib/env";
import { stripe } from "@/lib/stripe";

const stripeWebhookEvents = new Set([
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted'
]);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature") as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOKS_SECRET
    );

    if (stripeWebhookEvents.has(event.type)) {
      const session = event.data.object as any;

      const user = await prisma.user.findUnique({
        where: { customerId: session.customer },
        include: { subscription: true }
      })

      if (!user) throw new Error('User not exists');

      switch (event.type) {
        case "customer.subscription.deleted": {
          await prisma.subscription.update({
            where: { subscritiptionId: user?.subscription?.subscritiptionId },
            data: { active: false }
          })
        }

        case "customer.subscription.created":
        case "customer.subscription.updated": {
          if (session.status === 'active') {

            const plan = await prisma.plan.findUnique({
              where: { priceId: session.plan.id }
            })

            if (!plan) throw new Error('Plan not exists')

            if (user.subscription) {
              await prisma.subscription.update({
                where: { subscritiptionId: user?.subscription?.subscritiptionId },
                data: {
                  currentPeriodEndDate: new Date(session.current_period_end * 1000),
                  active: true,
                  planId: plan.id
                }
              })
            } else {
              await prisma.subscription.create({
                data: {
                  subscritiptionId: session.id,
                  active: true,
                  planId: plan.id,
                  userId: user.id as string,
                  currentPeriodEndDate: new Date(session.current_period_end * 1000)
                }
              })
            }

          }
        }
      }
    }

    return NextResponse.json({ webhookActionReceived: true });
  } catch (error: any) {
    return NextResponse.json(
      { message: "❌ WEBHOOK ERROR: " + error.message },
      { status: StatusCodes.BAD_REQUEST }
    );
  }
}
