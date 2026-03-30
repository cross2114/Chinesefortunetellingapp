export function Privacy() {
  return (
    <div className="min-h-screen bg-[#0f0a08] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-white/60">Last Updated: March 30, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-white/80 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl text-white mb-4">Introduction</h2>
            <p>
              Welcome to Mystic Arts. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you use our 
              application and tell you about your privacy rights.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl text-white mb-4">Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Account Information:</strong> When you create an account, we collect 
                your email address, username, and password.
              </li>
              <li>
                <strong className="text-white">Divination Data:</strong> Information you provide for divination 
                services, such as birth date, birth time, birth location, and questions you submit.
              </li>
              <li>
                <strong className="text-white">Images:</strong> Photos you upload for face reading analysis 
                (processed locally and not stored on our servers).
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> Information about how you use our app, including 
                pages visited, features used, and time spent.
              </li>
              <li>
                <strong className="text-white">Device Information:</strong> Device type, operating system, browser type, 
                and IP address.
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl text-white mb-4">How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide divination and fortune-telling services</li>
              <li>Create and manage your account</li>
              <li>Store your consultation history</li>
              <li>Process payments for premium subscriptions</li>
              <li>Improve our services and develop new features</li>
              <li>Send you updates and notifications (with your consent)</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Data Storage and Security */}
          <section>
            <h2 className="text-2xl text-white mb-4">Data Storage and Security</h2>
            <p className="mb-3">
              We implement appropriate technical and organizational measures to protect your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Data is encrypted in transit using HTTPS/SSL</li>
              <li>Passwords are hashed using industry-standard algorithms</li>
              <li>Access to personal data is restricted to authorized personnel only</li>
              <li>Regular security assessments and updates</li>
              <li>Face reading images are processed locally and not permanently stored</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl text-white mb-4">Data Sharing and Third Parties</h2>
            <p className="mb-3">
              We do not sell your personal data. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Service Providers:</strong> Third-party companies that help us operate 
                our app (e.g., hosting, payment processing, analytics).
              </li>
              <li>
                <strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights.
              </li>
              <li>
                <strong className="text-white">Business Transfers:</strong> In case of merger, acquisition, or sale of assets.
              </li>
            </ul>
            <p className="mt-3">
              All third-party service providers are required to protect your data and use it only for the purposes 
              we specify.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl text-white mb-4">Your Privacy Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
              <li><strong className="text-white">Correction:</strong> Update or correct inaccurate information</li>
              <li><strong className="text-white">Deletion:</strong> Request deletion of your personal data</li>
              <li><strong className="text-white">Export:</strong> Request a portable copy of your data</li>
              <li><strong className="text-white">Withdraw Consent:</strong> Opt-out of marketing communications</li>
              <li><strong className="text-white">Object:</strong> Object to certain data processing activities</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at privacy@mysticarts.app
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl text-white mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-3">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Keep you logged in</li>
              <li>Analyze how you use our app</li>
              <li>Provide personalized content</li>
            </ul>
            <p className="mt-3">
              You can control cookies through your browser settings, but some features may not work properly if 
              cookies are disabled.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl text-white mb-4">Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If you are a parent or guardian and believe your child has provided 
              us with personal data, please contact us so we can delete it.
            </p>
          </section>

          {/* International Data Transfers */}
          <section>
            <h2 className="text-2xl text-white mb-4">International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have different data protection laws. We ensure appropriate safeguards are in place 
              to protect your information in accordance with this privacy policy.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl text-white mb-4">Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to provide our services and fulfill the 
              purposes outlined in this policy. When you delete your account, we will delete or anonymize your 
              personal data within 30 days, except where we are required to retain it for legal or regulatory purposes.
            </p>
          </section>

          {/* Important Disclaimer */}
          <section className="bg-[#B8543E]/10 border border-[#B8543E]/30 rounded-lg p-6">
            <h2 className="text-2xl text-[#B8543E] mb-4">Important Disclaimer</h2>
            <p className="mb-3">
              <strong>Entertainment Purposes Only:</strong> All divination services, including BaZi, I Ching, Tarot, 
              Face Reading, and Daily Fortune, are provided for entertainment and cultural exploration purposes only.
            </p>
            <p className="mb-3">
              These services should not be used as a substitute for professional advice in legal, financial, medical, 
              or psychological matters. We are not responsible for any decisions you make based on the information 
              provided through our app.
            </p>
            <p>
              By using Mystic Arts, you acknowledge that you understand these services are for entertainment and 
              should not be relied upon for making important life decisions.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl text-white mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the 
              new privacy policy on this page and updating the "Last Updated" date. You are advised to review this 
              privacy policy periodically for any changes.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl text-white mb-4">Contact Us</h2>
            <p className="mb-3">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-white/5 rounded-lg p-6 space-y-2">
              <p><strong className="text-white">Email:</strong> privacy@mysticarts.app</p>
              <p><strong className="text-white">Website:</strong> https://mystic-arts.vercel.app</p>
              <p><strong className="text-white">Support:</strong> support@mysticarts.app</p>
            </div>
          </section>

          {/* GDPR/CCPA Compliance */}
          <section>
            <h2 className="text-2xl text-white mb-4">GDPR and CCPA Compliance</h2>
            <p className="mb-3">
              We comply with the General Data Protection Regulation (GDPR) for users in the European Union and the 
              California Consumer Privacy Act (CCPA) for California residents.
            </p>
            <p className="mb-3">
              <strong className="text-white">For EU Users:</strong> You have additional rights under GDPR, including 
              the right to data portability and the right to lodge a complaint with a supervisory authority.
            </p>
            <p>
              <strong className="text-white">For California Residents:</strong> You have the right to know what 
              personal information is collected, sold, or disclosed, and the right to opt-out of the sale of personal 
              information (we do not sell personal information).
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