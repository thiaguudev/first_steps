/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

export default withNextIntl(nextConfig);
