import React from 'react';

const PrivacyPolicy = () => {
  const privacyPolicyData = [
    {
      section: 'Definitions and Key Terms',
      content:
        'To help explain things as clearly as possible in this Privacy Policy, every time any of these terms are referenced, they are strictly defined as follows:',
      terms: [
        {
          term: 'Cookie',
          definition:
            'A small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, and remember information about you, such as your language preference or login information.',
        },
        {
          term: 'Country',
          definition: 'The location where our organization is based.',
        },
        {
          term: 'Customer',
          definition:
            'Refers to the company, organization, or person that signs up to use our website to manage relationships with consumers or website users.',
        },
        {
          term: 'Device',
          definition:
            'Any internet-connected device such as a phone, tablet, computer, or any other device that can be used to visit our website and use its features.',
        },
        {
          term: 'Personnel',
          definition:
            'Refers to individuals employed by our organization or under contract to perform a service on behalf of our organization.',
        },
        {
          term: 'Personal Data',
          definition:
            'Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.',
        },
        {
          term: 'You',
          definition:
            'A person or entity that is registered with our organization to use the website.',
        },
      ],
    },
    {
      section: 'What Information Do We Collect?',
      content:
        'We collect information from you when you visit our website, register on our site, place an order, respond to a survey, or fill out a form. The information we collect may include:',
      items: [
        'Name / Username',
        'Phone Numbers',
        'Email Addresses',
        'Mailing Addresses',
        'Billing Addresses',
      ],
    },
    {
      section: 'FIPA Compliance',
      content:
        'Our organization, being registered in Florida, adheres to the provisions of the Florida Information Protection Act (FIPA). This includes ensuring the security and confidentiality of personal information and notifying affected individuals in the event of a data breach, as required by FIPA.',
    },
    {
      section: 'CCPA Compliance',
      content:
        'In addition to FIPA compliance, our organization also complies with the California Consumer Privacy Act (CCPA). This legislation grants California residents certain rights regarding their personal information, including the right to know what personal information is being collected, the right to request deletion of personal information, and the right to opt-out of the sale of personal information.',
    },
    {
      section: 'Do We Share the Information We Collect with Third Parties?',
      content:
        'We are committed to protecting your privacy. Your mobile number, email address, mailing address, billing address, name, and other information are not shared with any third party or affiliates for marketing or promotional purposes. Your privacy and confidentiality are important to us, and we strive to maintain the security of your personal information at all times.',
    },
    {
      section:
        'Where and When Is Information Collected from Customers and End Users?',
      content:
        'Our organization will collect personal information that you submit to us.',
    },
    {
      section: 'How Do We Use the Information We Collect?',
      content:
        'Any of the information we collect from you may be used in one of the following ways:',
      items: [
        'To personalize your experience',
        'To improve our website',
        'To improve customer service',
        'To process transactions',
      ],
    },
    {
      section: 'How Long Do We Keep Your Information?',
      content:
        'We keep your information only as long as we need it to provide our services to you and fulfill the purposes described in this policy.',
    },
    {
      section: 'How Do We Protect Your Information?',
      content:
        'We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.',
    },
    {
      section: 'Is the Information Collected Through Our Organization Secure?',
      content:
        'We take precautions to protect the security of your information. However, neither people nor security systems are foolproof, including encryption systems. Therefore, while we use reasonable efforts to protect your personal information, we cannot guarantee its absolute security.',
    },
    {
      section: 'Can I Update or Correct My Information?',
      content:
        'You may contact us in order to update or correct your information.',
    },
    {
      section: 'GDPR Compliance',
      content:
        'Although our primary customer base is within the US, we recognize the importance of data protection for individuals globally. Therefore, we have implemented measures to comply with the General Data Protection Regulation (GDPR) for users within the European Economic Area (EEA).',
    },
    {
      section: 'Governing Law',
      content:
        'This Privacy Policy is governed by the laws of the US without regard to its conflict of laws provision.',
    },
    {
      section: 'Your Consent',
      content:
        "By using our organization's services, registering an account, or making a purchase, you hereby consent to our Privacy Policy and agree to its terms.",
    },
    {
      section: 'Cookies',
      content:
        'Our organization uses cookies to identify the areas of our website that you have visited.',
    },
    {
      section: 'Blocking and Disabling Cookies',
      content:
        'You may set your browser to block cookies and similar technologies, but this action may prevent our website from functioning properly.',
    },
    {
      section: 'Kids’ Privacy',
      content:
        'We do not knowingly collect personally identifiable information from anyone under the age of 13.',
    },
    {
      section: 'Changes to Our Privacy Policy',
      content:
        'We may change our website and policies, and we may need to make changes to this Privacy Policy so that they accurately reflect our website and policies. Unless otherwise required by law, we will notify you before we make changes to this Privacy Policy.',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

        {privacyPolicyData.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{section.section}</h2>
            <div className="bg-white p-4 rounded shadow">
              <p className="mb-4">{section.content}</p>
              {section.terms && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">
                    Definitions and Key Terms
                  </h3>
                  <ul className="list-disc ml-6">
                    {section.terms.map((term, i) => (
                      <li key={i}>
                        <strong>{term.term}:</strong> {term.definition}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {section.items && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">
                    Information We Collect
                  </h3>
                  <ul className="list-disc ml-6">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
