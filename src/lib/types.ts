export type ChannelType = 'email' | 'web' | 'sms' | 'link';

export type SurveyType = 'nps' | 'ces' | 'csat' | '5-star' | 'smileys' | 'thumbs' | 'pmf';

export type Locale = "pt" | "en" | "es";

export type Address = {
  city: string;
  country: string;
  line1: string;
  postal_code: string;
  state: string;
};

export type ShippingInfo = {
  address: Address;
  name: string;
};

export type StripeCustomerType = {
  email: string;
  name: string;
  shipping: ShippingInfo;
  address: Address;
};
