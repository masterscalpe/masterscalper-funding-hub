import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowRight, FiTrendingUp, FiZap, FiAward } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropFirmCard from '@/components/PropFirmCard';
import BrokerCard from '@/components/BrokerCard';
import { propFirms, brokers, deals } from '@/data';
import { generateMetaTags, SEO_CONFIG } from '@/utils/helpers';

export default function Home() {
  const featuredPropFirms = propFirms.filter((f) => f.featured);
  const featuredBrokers = brokers.filter((b) => b.featured);

  return (
    <>
      <Head>
        <title>Compare Prop Firms & Brokers | Masterscalper Funding Hub</title>
        <meta name="description" content="Find and compare the best prop firms, brokers, and trading opportunities. Get exclusive deals, discounts, and expert reviews." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Compare Prop Firms & Brokers | Masterscalper Funding Hub" />
        <meta property="og:description" content="Find and compare the best prop firms, brokers, and trading opportunities." />
        <meta property="og:url" content={SEO_CONFIG.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={SEO_CONFIG.url} />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="section-gradient py-20 lg:py-32">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="heading-1 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Compare the Best Prop Firms, Brokers & Trading Opportunities
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Find funded accounts, compare brokers, discover exclusive deals, and access powerful trading tools. All in one professional platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/prop-firms" className="btn-primary flex items-center gap-2">
                Explore Prop Firms <FiArrowRight />
              </Link>
              <Link href="/brokers" className="btn-secondary">
                Compare Brokers
              </Link>
              <Link href="/deals" className="btn-secondary">
                View Deals
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 text-center">
              <div>
                <p className="text-3xl font-bold text-neon-cyan">50+</p>
                <p className="text-sm text-gray-400">Trading Platforms</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neon-blue">$100M+</p>
                <p className="text-sm text-gray-400">Affiliate Payouts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neon-cyan">10K+</p>
                <p className="text-sm text-gray-400">Active Traders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Prop Firms */}
      <section className="py-20 bg-dark-950">
        <div className="container-fluid">
          <div className="mb-12">
            <h2 className="heading-2 mb-4">Top Prop Trading Firms</h2>
            <p className="text-gray-400 max-w-2xl">
              Discover the most popular funded account providers with verified ratings and comprehensive comparisons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredPropFirms.map((firm) => (
              <PropFirmCard
                key={firm.id}
                id={firm.id}
                name={firm.name}
                rating={firm.rating}
                reviews={firm.reviews}
                challengePrice={firm.challengePrice}
                profitSplit={firm.profitSplit}
                maxDrawdown={firm.maxDrawdown}
                featured={firm.featured}
                affiliateLink={firm.affiliateLink}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/prop-firms" className="btn-primary inline-flex items-center gap-2">
              View All Prop Firms <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Brokers */}
      <section className="py-20 section-gradient">
        <div className="container-fluid">
          <div className="mb-12">
            <h2 className="heading-2 mb-4">Top Forex & CFD Brokers</h2>
            <p className="text-gray-400 max-w-2xl">
              Find the most reliable and profitable brokers for your trading style with real trader reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredBrokers.map((broker) => (
              <BrokerCard
                key={broker.id}
                id={broker.id}
                name={broker.name}
                rating={broker.rating}
                reviews={broker.reviews}
                spread={broker.spread}
                leverage={broker.leverage}
                regulation={broker.regulation}
                featured={broker.featured}
                affiliateLink={broker.affiliateLink}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/brokers" className="btn-primary inline-flex items-center gap-2">
              Compare All Brokers <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-dark-950">
        <div className="container-fluid">
          <h2 className="heading-2 text-center mb-12">Why Choose Masterscalper?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiTrendingUp,
                title: 'Expert Reviews',
                description: 'In-depth analysis of all major prop firms and brokers with verified trader feedback.',
              },
              {
                icon: FiZap,
                title: 'Exclusive Deals',
                description: 'Get access to limited-time promotions, discounts, and affiliate offers.',
              },
              {
                icon: FiAward,
                title: 'Trading Tools',
                description: 'Free calculators and tools to help you make better trading decisions.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card p-8 text-center hover:border-neon-blue transition-all">
                  <Icon className="w-12 h-12 text-neon-blue mx-auto mb-4" />
                  <h3 className="heading-3 mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Deals */}
      <section className="py-20 section-gradient">
        <div className="container-fluid">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="heading-2 mb-4">🎁 Active Deals & Discounts</h2>
              <p className="text-gray-400">Save money with exclusive promotions and affiliate offers</p>
            </div>
            <Link href="/deals" className="btn-secondary hidden sm:block">
              View All Deals
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {deals.slice(0, 4).map((deal) => (
              <div key={deal.id} className="card p-6 flex items-center justify-between hover:border-neon-cyan transition-all">
                <div className="flex-grow">
                  <p className="text-sm text-neon-cyan font-bold mb-1">{deal.category.replace('-', ' ').toUpperCase()}</p>
                  <h3 className="font-bold mb-2">{deal.title}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-lg font-bold">
                      {deal.discount} OFF
                    </span>
                    <span className="text-gray-400">Code: {deal.promoCode}</span>
                  </div>
                </div>
                <a
                  href={deal.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 px-6 py-2 bg-neon-cyan text-dark-950 font-bold rounded-lg hover:bg-neon-blue transition-all whitespace-nowrap"
                >
                  Claim
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/deals" className="btn-primary">
              View All Active Deals
            </Link>
          </div>
        </div>
      </section>

      {/* Trading Tools Preview */}
      <section className="py-20 bg-dark-950">
        <div className="container-fluid">
          <h2 className="heading-2 text-center mb-12">Free Trading Tools</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Risk Calculator', desc: 'Calculate your position size based on risk' },
              { title: 'Lot Size Calculator', desc: 'Determine optimal lot sizes for your trades' },
              { title: 'Drawdown Calculator', desc: 'Track your drawdown percentage' },
              { title: 'Profit Calculator', desc: 'Estimate potential profits' },
              { title: 'Prop Firm Target Calculator', desc: 'Calculate targets for challenges' },
              { title: 'Comparison Tool', desc: 'Compare multiple prop firms side-by-side' },
            ].map((tool, index) => (
              <Link
                key={index}
                href="/tools"
                className="card p-6 hover:border-neon-blue hover:shadow-lg hover:shadow-neon-blue/20 transition-all group"
              >
                <h3 className="font-bold mb-2 group-hover:text-neon-blue transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-400">{tool.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/tools" className="btn-primary">
              Access All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 section-gradient">
        <div className="container-fluid">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="heading-2">Stay Updated with Latest Deals</h2>
            <p className="text-gray-400">
              Get notified about new prop firm launches, exclusive discounts, and trading opportunities.
            </p>

            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                required
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>

            <p className="text-xs text-gray-500">
              We never spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
