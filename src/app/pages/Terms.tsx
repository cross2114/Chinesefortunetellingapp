export function Terms() {
  return (
    <div className="min-h-screen bg-[#0f0a08] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Terms of Service</h1>
          <p className="text-white/60">Last Updated: March 30, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-white/80 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using Mystic Arts ("the App"), you agree to be bound by these Terms of Service 
              ("Terms"). If you disagree with any part of these terms, you may not access the App.
            </p>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="text-2xl text-white mb-4">2. Service Description</h2>
            <p className="mb-3">
              Mystic Arts provides digital divination and fortune-telling services inspired by traditional Chinese 
              wisdom, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>BaZi (Four Pillars of Destiny) calculations</li>
              <li>I Ching (Book of Changes) divination</li>
              <li>Tarot card readings</li>
              <li>Face reading analysis</li>
              <li>Daily fortune and horoscopes</li>
            </ul>
          </section>

          {/* Entertainment Disclaimer */}
          <section className="bg-[#B8543E]/10 border-2 border-[#B8543E]/30 rounded-lg p-6">
            <h2 className="text-2xl text-[#B8543E] mb-4">3. Entertainment and Educational Purposes Only</h2>
            <p className="mb-3">
              <strong>IMPORTANT:</strong> All services provided by Mystic Arts are for entertainment, cultural 
              exploration, and educational purposes only.
            </p>
            <p className="mb-3">
              Our services are NOT intended to provide:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Professional medical, psychological, or therapeutic advice</li>
              <li>Legal or financial advice</li>
              <li>Scientific or factual predictions</li>
              <li>Guaranteed outcomes or results</li>
            </ul>
            <p className="mt-3">
              You acknowledge that divination results should not be used as the sole basis for making important 
              life decisions regarding health, relationships, finances, career, or legal matters.
            </p>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl text-white mb-4">4. User Accounts</h2>
            <p className="mb-3">
              When you create an account with us, you must provide accurate, complete, and current information. 
              You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>
            <p className="mt-3">
              You must be at least 13 years old to use this service. Users under 18 should have parental consent.
            </p>
          </section>

          {/* Subscription and Payments */}
          <section>
            <h2 className="text-2xl text-white mb-4">5. Subscriptions and Payments</h2>
            
            <h3 className="text-xl text-white mb-3 mt-4">5.1 Free Tier</h3>
            <p>
              We offer a limited free tier with restricted access to certain features and a monthly consultation limit.
            </p>

            <h3 className="text-xl text-white mb-3 mt-4">5.2 Premium Subscriptions</h3>
            <p className="mb-3">
              Premium subscriptions provide unlimited access to all features. Available plans:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Monthly subscription</li>
              <li>Annual subscription (with discount)</li>
            </ul>

            <h3 className="text-xl text-white mb-3 mt-4">5.3 Billing</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Subscriptions automatically renew unless canceled</li>
              <li>You will be charged at the start of each billing period</li>
              <li>Prices are subject to change with 30 days notice</li>
              <li>All payments are processed securely through third-party payment processors</li>
            </ul>

            <h3 className="text-xl text-white mb-3 mt-4">5.4 Cancellation</h3>
            <p>
              You may cancel your subscription at any time through your account settings. Cancellation takes effect 
              at the end of the current billing period. No refunds for partial periods.
            </p>

            <h3 className="text-xl text-white mb-3 mt-4">5.5 Refund Policy</h3>
            <p>
              We offer a 7-day money-back guarantee for first-time premium subscribers. After 7 days, all payments 
              are non-refundable except as required by law.
            </p>
          </section>

          {/* User Conduct */}
          <section>
            <h2 className="text-2xl text-white mb-4">6. User Conduct</h2>
            <p className="mb-3">You agree NOT to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to the App or related systems</li>
              <li>Interfere with or disrupt the App's functionality</li>
              <li>Reverse engineer, decompile, or disassemble any part of the App</li>
              <li>Share your account credentials with others</li>
              <li>Use automated tools (bots, scrapers) without permission</li>
              <li>Upload malicious code or harmful content</li>
              <li>Harass, threaten, or harm other users</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl text-white mb-4">7. Intellectual Property</h2>
            <p className="mb-3">
              All content on Mystic Arts, including text, graphics, logos, icons, images, audio clips, and software, 
              is the property of Mystic Arts or its content suppliers and is protected by international copyright laws.
            </p>
            <p className="mb-3">
              You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Copy, reproduce, or redistribute our content without permission</li>
              <li>Create derivative works based on our content</li>
              <li>Use our trademarks or branding without authorization</li>
            </ul>
            <p className="mt-3">
              You retain ownership of any personal information you provide, but grant us a license to use it to 
              provide our services.
            </p>
          </section>

          {/* User Content */}
          <section>
            <h2 className="text-2xl text-white mb-4">8. User-Generated Content</h2>
            <p className="mb-3">
              If you upload photos for face reading or submit questions for divination:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You retain ownership of your content</li>
              <li>You grant us a license to process and analyze it to provide our services</li>
              <li>You represent that you have the right to upload the content</li>
              <li>You agree not to upload content that violates others' rights or applicable laws</li>
            </ul>
            <p className="mt-3">
              We reserve the right to remove any content that violates these Terms or is otherwise objectionable.
            </p>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-2xl text-white mb-4">9. Privacy</h2>
            <p>
              Your use of the App is also governed by our Privacy Policy. Please review our Privacy Policy to 
              understand how we collect, use, and protect your personal information.
            </p>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl text-white mb-4">10. Disclaimers and Limitations of Liability</h2>
            
            <h3 className="text-xl text-white mb-3 mt-4">10.1 No Warranties</h3>
            <p className="mb-3">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR 
              IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Accuracy, reliability, or completeness of divination results</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of third-party rights</li>
            </ul>

            <h3 className="text-xl text-white mb-3 mt-4">10.2 Limitation of Liability</h3>
            <p className="mb-3">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYSTIC ARTS SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Any indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Decisions made based on divination results</li>
              <li>Damages arising from use or inability to use the App</li>
            </ul>
            <p className="mt-3">
              Our total liability shall not exceed the amount you paid us in the 12 months prior to the event 
              giving rise to the liability.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl text-white mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Mystic Arts, its officers, directors, employees, and agents 
              from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your user-generated content</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl text-white mb-4">12. Termination</h2>
            <p className="mb-3">
              We reserve the right to suspend or terminate your account and access to the App:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>If you violate these Terms</li>
              <li>If your account is inactive for an extended period</li>
              <li>For any other reason, with or without notice</li>
            </ul>
            <p className="mt-3">
              Upon termination, your right to use the App ceases immediately. Provisions that should survive 
              termination (including disclaimers, limitations of liability, and indemnification) will remain in effect.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl text-white mb-4">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Posting the updated Terms on the App</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending an email notification (for significant changes)</li>
            </ul>
            <p className="mt-3">
              Your continued use of the App after changes become effective constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl text-white mb-4">14. Governing Law and Dispute Resolution</h2>
            <p className="mb-3">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], 
              without regard to its conflict of law provisions.
            </p>
            <p className="mb-3">
              Any disputes arising from these Terms or your use of the App shall be resolved through:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Good faith negotiation between the parties</li>
              <li>Mediation, if negotiation fails</li>
              <li>Binding arbitration (if required by law in your jurisdiction)</li>
            </ol>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl text-white mb-4">15. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be 
              limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain 
              in full force and effect.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="text-2xl text-white mb-4">16. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and 
              Mystic Arts regarding your use of the App and supersede all prior agreements and understandings.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl text-white mb-4">17. Contact Information</h2>
            <p className="mb-3">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-white/5 rounded-lg p-6 space-y-2">
              <p><strong className="text-white">Email:</strong> legal@mysticarts.app</p>
              <p><strong className="text-white">Support:</strong> support@mysticarts.app</p>
              <p><strong className="text-white">Website:</strong> https://mystic-arts.vercel.app</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-white/5 rounded-lg p-6">
            <h2 className="text-2xl text-white mb-4">Acknowledgment</h2>
            <p>
              BY USING MYSTIC ARTS, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY 
              THESE TERMS OF SERVICE.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© 2026 Mystic Arts. All rights reserved.</p>
          <p className="mt-2">問天知命 · 道法自然</p>
        </div>
      </div>
    </div>
  );
}