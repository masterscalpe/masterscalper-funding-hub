import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { propFirms, brokers } from '@/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ComparisonsPage() {
  const [leftType, setLeftType] = useState<'prop-firm' | 'broker'>('prop-firm');
  const [rightType, setRightType] = useState<'prop-firm' | 'broker'>('prop-firm');
  const [leftId, setLeftId] = useState(propFirms[0].id);
  const [rightId, setRightId] = useState(propFirms[1].id);

  const leftItem = leftType === 'prop-firm' ? propFirms.find((f) => f.id === leftId) : brokers.find((b) => b.id === leftId);
  const rightItem = rightType === 'prop-firm' ? propFirms.find((f) => f.id === rightId) : brokers.find((b) => b.id === rightId);

  return (
    <>
      <Head>
        <title>Prop Firm & Broker Comparison Tool | Masterscalper</title>
        <meta name="description" content="Compare prop firms and brokers side-by-side to find the best option for your trading." />
        <link rel="canonical" href="https://masterscalperfunding.hub/comparisons" />
      </Head>

      <Header />

      {/* Header */}
      <section className="section-gradient py-12">
        <div className="container-fluid">
          <div className="flex items-center gap-2 mb-4 text-gray-400">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="text-neon-blue">Comparisons</span>
          </div>
          <h1 className="heading-2 mb-4">Comparison Tool</h1>
          <p className="text-gray-400 max-w-2xl">
            Compare prop firms and brokers side-by-side to make the best trading decision.
          </p>
        </div>
      </section>

      {/* Comparison Tool */}
      <section className="py-12 bg-dark-950">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Item */}
            <div className="card p-6 space-y-6">
              <div>
                <label className="text-sm font-bold text-gray-300 mb-2 block">Type</label>
                <select
                  value={leftType}
                  onChange={(e) => {
                    setLeftType(e.target.value as 'prop-firm' | 'broker');
                    setLeftId(e.target.value === 'prop-firm' ? propFirms[0].id : brokers[0].id);
                  }}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
                >
                  <option value="prop-firm">Prop Firm</option>
                  <option value="broker">Broker</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-300 mb-2 block">Select</label>
                <select
                  value={leftId}
                  onChange={(e) => setLeftId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
                >
                  {(leftType === 'prop-firm' ? propFirms : brokers).map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {leftItem && (
                <div className="space-y-3 pt-4 border-t border-slate-700">
                  <h3 className="heading-3">{leftItem.name}</h3>

                  {leftType === 'prop-firm' ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rating:</span>
                        <span className="font-bold text-neon-cyan">{(leftItem as any).rating}/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Challenge Price:</span>
                        <span className="font-bold">{(leftItem as any).challengePrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Profit Split:</span>
                        <span className="font-bold text-neon-blue">{(leftItem as any).profitSplit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Max Drawdown:</span>
                        <span className="font-bold">{(leftItem as any).maxDrawdown}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Scalping:</span>
                        <span className={`font-bold ${(leftItem as any).scalpingAllowed ? 'text-green-400' : 'text-red-400'}`}>
                          {(leftItem as any).scalpingAllowed ? '✓ Allowed' : '✗ Not Allowed'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">EA Trading:</span>
                        <span className={`font-bold ${(leftItem as any).eaAllowed ? 'text-green-400' : 'text-red-400'}`}>
                          {(leftItem as any).eaAllowed ? '✓ Allowed' : '✗ Not Allowed'}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rating:</span>
                        <span className="font-bold text-neon-cyan">{(leftItem as any).rating}/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Spread:</span>
                        <span className="font-bold">{(leftItem as any).spread}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Leverage:</span>
                        <span className="font-bold text-neon-blue">{(leftItem as any).leverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Regulation:</span>
                        <span className="font-bold">{(leftItem as any).regulation.split(',')[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Min Deposit:</span>
                        <span className="font-bold">{(leftItem as any).minDeposit}</span>
                      </div>
                    </>
                  )}

                  <a
                    href={(leftItem as any).affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center mt-4"
                  >
                    Open Account
                  </a>
                </div>
              )}
            </div>

            {/* Right Item */}
            <div className="card p-6 space-y-6">
              <div>
                <label className="text-sm font-bold text-gray-300 mb-2 block">Type</label>
                <select
                  value={rightType}
                  onChange={(e) => {
                    setRightType(e.target.value as 'prop-firm' | 'broker');
                    setRightId(e.target.value === 'prop-firm' ? propFirms[0].id : brokers[0].id);
                  }}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
                >
                  <option value="prop-firm">Prop Firm</option>
                  <option value="broker">Broker</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-300 mb-2 block">Select</label>
                <select
                  value={rightId}
                  onChange={(e) => setRightId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
                >
                  {(rightType === 'prop-firm' ? propFirms : brokers).map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {rightItem && (
                <div className="space-y-3 pt-4 border-t border-slate-700">
                  <h3 className="heading-3">{rightItem.name}</h3>

                  {rightType === 'prop-firm' ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rating:</span>
                        <span className="font-bold text-neon-cyan">{(rightItem as any).rating}/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Challenge Price:</span>
                        <span className="font-bold">{(rightItem as any).challengePrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Profit Split:</span>
                        <span className="font-bold text-neon-blue">{(rightItem as any).profitSplit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Max Drawdown:</span>
                        <span className="font-bold">{(rightItem as any).maxDrawdown}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Scalping:</span>
                        <span className={`font-bold ${(rightItem as any).scalpingAllowed ? 'text-green-400' : 'text-red-400'}`}>
                          {(rightItem as any).scalpingAllowed ? '✓ Allowed' : '✗ Not Allowed'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">EA Trading:</span>
                        <span className={`font-bold ${(rightItem as any).eaAllowed ? 'text-green-400' : 'text-red-400'}`}>
                          {(rightItem as any).eaAllowed ? '✓ Allowed' : '✗ Not Allowed'}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rating:</span>
                        <span className="font-bold text-neon-cyan">{(rightItem as any).rating}/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Spread:</span>
                        <span className="font-bold">{(rightItem as any).spread}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Leverage:</span>
                        <span className="font-bold text-neon-blue">{(rightItem as any).leverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Regulation:</span>
                        <span className="font-bold">{(rightItem as any).regulation.split(',')[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Min Deposit:</span>
                        <span className="font-bold">{(rightItem as any).minDeposit}</span>
                      </div>
                    </>
                  )}

                  <a
                    href={(rightItem as any).affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center mt-4"
                  >
                    Open Account
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
