import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

type InterestType = 'team' | 'invest' | 'supplier' | '';

const interests = {
  team: {
    emoji: '🔵',
    title: 'Join the SOHUB Team',
    description: "We're looking for passionate people who believe Bangladesh deserves better. If you align with our values, want to work with a transparent ecosystem, and love building things that matter — we want to hear from you.",
    points: ['Passion for Bangladesh', 'Discipline over hype', 'Technology-first mindset', 'Long-term commitment']
  },
  invest: {
    emoji: '🟠',
    title: 'Invest in SOHUB',
    description: 'If you share our belief in long-term value and want to support an ecosystem that is growing with purpose, you can express your investment interest.',
    points: ['Disciplined initiative model', 'Multiple verticals — smart home, food, water', 'Technology-first approach', 'Ethical, sustainable growth']
  },
  supplier: {
    emoji: '🟢',
    title: 'Become a Supplier or Manufacturing Partner',
    description: 'If you can provide products or materials that meet our strict quality standards and align with our philosophy, you may apply as a partner.',
    points: ['Transparency', 'Consistency', 'Premium quality', 'Long-term trust']
  }
};

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% original, untouched
   ────────────────────────────────────────────── */
const DesktopJoinUsContent = ({ setIsModalOpen }: { setIsModalOpen: (open: boolean) => void }) => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto text-center">

        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-[48px] font-normal tracking-tight text-[#202124] mb-4">
            Join with Us
          </h1>
          <p className="text-[20px] text-[#5f6368] font-normal max-w-2xl mx-auto">
            Be part of an ecosystem that's building real solutions for Bangladesh — with discipline, transparency, and technology.
          </p>
        </div>

        {/* Intro */}
        <div className="space-y-4 md:space-y-6 text-base sm:text-[20px] leading-relaxed mb-16 max-w-3xl mx-auto text-[#3c4043]">
          <p className="font-medium text-[22px]">
            SOHUB — Solution Hub Technologies — is not a typical company.
          </p>
          <p>
            We build focused initiatives, each solving one real problem for Bangladesh. From smart home technology to safe drinking water, we operate with a single principle:
          </p>
          <p className="text-[28px] font-bold text-[#fb8a09]">
            Raise the standard. Every time.
          </p>
          <p>
            No shortcuts. No compromises. No random products.<br />
            Every initiative is disciplined, data-driven, and built to last.
          </p>
        </div>

        {/* What We're Building */}
        <div className="bg-[#fff7e6] rounded-[28px] p-8 md:p-16 mb-16 text-left max-w-4xl mx-auto border border-[#fb8a09]/10">
          <div className="text-center mb-8">
            <h3 className="text-[36px] font-normal tracking-tight text-[#202124] mb-4">What We're Building</h3>
            <p className="text-[20px] text-[#3c4043]">
              SOHUB is a growing ecosystem of initiatives.<br />
              <span className="font-medium text-[#fb8a09]">Each one tackles a real problem</span> — with global-quality execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-[18px] text-[#3c4043]">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09]">✓</div>
              <span>SOHUB Smart Home — IoT & automation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09]">✓</div>
              <span>Ximpul — Safe drinking water</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09]">✓</div>
              <span>O-MAMA — Fresh & hygienic food</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09]">✓</div>
              <span>SOHUB Connect — Seamless communication</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09]">✓</div>
              <span>SOHUB Protect — Safety & trust</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09]">✓</div>
              <span>SOHUB AI — Intelligence at the core</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#f8f9fa] rounded-[28px] p-8 md:p-12 border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-[36px] font-normal tracking-tight text-[#202124] mb-4">Ready to Be Part of This?</h3>
          <p className="text-[20px] mb-8 text-[#5f6368]">
            Whether you want to join our team, invest in the ecosystem, or become a manufacturing partner — we'd love to hear from you.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-3 bg-[#fb8a09] text-white rounded-full font-medium hover:bg-[#e07a00] transition-colors"
          >
            Get in Touch
          </button>
          <p className="mt-8 text-[16px] text-[#5f6368] italic">
            We review every submission personally and respond within 5-7 business days.
          </p>
        </div>

      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION — compact spacing, optimized text sizes
   ────────────────────────────────────────────── */
const MobileJoinUsContent = ({ setIsModalOpen }: { setIsModalOpen: (open: boolean) => void }) => {
  return (
    <section className="pt-24 pb-12 px-5">
      <div className="max-w-full mx-auto text-center">

        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-[32px] font-normal tracking-tight text-[#202124] mb-3">
            Join with Us
          </h1>
          <p className="text-[16px] text-[#5f6368] font-normal px-2">
            Be part of an ecosystem that's building real solutions for Bangladesh — with discipline, transparency, and technology.
          </p>
        </div>

        {/* Intro */}
        <div className="space-y-4 text-[15px] leading-relaxed mb-12 text-[#3c4043] px-2 text-left">
          <p className="font-medium text-[17px] text-center">
            SOHUB — Solution Hub Technologies — is not a typical company.
          </p>
          <p className="text-center">
            We build focused initiatives, each solving one real problem for Bangladesh. From smart home technology to safe drinking water, we operate with a single principle:
          </p>
          <p className="text-[22px] font-bold text-[#fb8a09] text-center my-6 leading-tight">
            Raise the standard.<br />Every time.
          </p>
          <p className="text-center">
            No shortcuts. No compromises. No random products.<br />
            Every initiative is disciplined, data-driven, and built to last.
          </p>
        </div>

        {/* What We're Building */}
        <div className="bg-[#fff7e6] rounded-[24px] p-6 mb-12 text-left border border-[#fb8a09]/10">
          <div className="text-center mb-6">
            <h3 className="text-[24px] font-normal tracking-tight text-[#202124] mb-3">What We're Building</h3>
            <p className="text-[15px] text-[#3c4043]">
              SOHUB is a growing ecosystem of initiatives.<br />
              <span className="font-medium text-[#fb8a09]">Each one tackles a real problem</span> — with global-quality execution.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-[14px] text-[#3c4043]">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09] text-xs mt-0.5">✓</div>
              <span>SOHUB Smart Home — IoT & automation</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09] text-xs mt-0.5">✓</div>
              <span>Ximpul — Safe drinking water</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09] text-xs mt-0.5">✓</div>
              <span>O-MAMA — Fresh & hygienic food</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09] text-xs mt-0.5">✓</div>
              <span>SOHUB Connect — Seamless communication</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09] text-xs mt-0.5">✓</div>
              <span>SOHUB Protect — Safety & trust</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09] text-xs mt-0.5">✓</div>
              <span>SOHUB AI — Intelligence at the core</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#f8f9fa] rounded-[24px] p-8 border border-gray-100 text-center">
          <h3 className="text-[24px] font-normal tracking-tight text-[#202124] mb-3">Ready to Be Part of This?</h3>
          <p className="text-[15px] mb-6 text-[#5f6368]">
            Whether you want to join our team, invest in the ecosystem, or become a partner — we'd love to hear from you.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#fb8a09] text-white rounded-full font-medium hover:bg-[#e07a00] transition-colors"
          >
            Get in Touch
          </button>
          <p className="mt-6 text-[13px] text-[#5f6368] italic">
            We review every submission personally and respond within 5-7 business days.
          </p>
        </div>

      </div>
    </section>
  );
};


/* ──────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────── */
const JoinUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<InterestType>('');
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    document.title = "Join with Us - SOHUB";
    window.scrollTo(0, 0);
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const interestTitle = interests[selectedInterest as keyof typeof interests].title;
      const adminEmails = 'info@sohub.com.bd';
      const year = new Date().getFullYear();
      const submittedDate = new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' });

      const customerEmailHTML = `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #fb8a09 0%, #e07a00 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Welcome to SOHUB</h1>
          </div>
          <div style="padding: 40px 30px; background: #ffffff;">
            <h2 style="color: #202124; margin: 0 0 20px 0; font-size: 24px;">Thank You, ${formData.name}!</h2>
            <p style="color: #3c4043; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              We're excited to receive your interest:
            </p>
            <div style="background: #f8f9fa; border-left: 4px solid #fb8a09; padding: 20px; margin: 0 0 25px 0; border-radius: 4px;">
              <p style="color: #202124; font-size: 18px; font-weight: 600; margin: 0;">${interestTitle}</p>
            </div>
            <p style="color: #3c4043; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">
              Your submission is being reviewed by our team. We carefully evaluate every application to ensure alignment with our mission.
            </p>
            <p style="color: #3c4043; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
              If your profile matches our values and vision, we'll reach out to you within <strong>5-7 business days</strong>.
            </p>
            <div style="border-top: 2px solid #e5e7eb; padding-top: 25px; margin-top: 30px;">
              <p style="color: #5f6368; font-size: 14px; line-height: 1.5; margin: 0 0 15px 0;">
                In the meantime, feel free to explore more about us:
              </p>
              <p style="margin: 0 0 8px 0;">
                <a href="https://home.sohub.com.bd" style="color: #fb8a09; text-decoration: none; font-size: 14px;">&rarr; Learn About SOHUB</a>
              </p>
            </div>
          </div>
          <div style="background: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #202124; font-size: 16px; font-weight: 600; margin: 0 0 5px 0;">The SOHUB Team</p>
            <p style="color: #5f6368; font-size: 14px; margin: 0 0 15px 0;">Solution Hub Technologies</p>
            <p style="color: #bdc1c6; font-size: 12px; margin: 0;">&copy; ${year} SOHUB. All rights reserved.</p>
          </div>
        </div>`;

      const adminEmailHTML = `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #fb8a09 0%, #e07a00 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Submission — Join with Us</h1>
          </div>
          <div style="padding: 35px 30px; background: #ffffff;">
            <div style="background: #fff8e1; border-left: 4px solid #fb8a09; padding: 20px; margin: 0 0 30px 0; border-radius: 4px;">
              <p style="color: #fb8a09; font-size: 18px; font-weight: 600; margin: 0;">${interestTitle}</p>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 15px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; width: 140px;"><strong style="color: #374151; font-size: 14px;">Name</strong></td>
                <td style="padding: 15px; background: #ffffff; border-bottom: 1px solid #e5e7eb;"><span style="color: #1d1d1f; font-size: 15px;">${formData.name}</span></td>
              </tr>
              <tr>
                <td style="padding: 15px; background: #f9fafb; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151; font-size: 14px;">Phone</strong></td>
                <td style="padding: 15px; background: #ffffff; border-bottom: 1px solid #e5e7eb;"><span style="color: #1d1d1f; font-size: 15px;">${formData.phone}</span></td>
              </tr>
              <tr>
                <td style="padding: 15px; background: #f9fafb; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151; font-size: 14px;">Email</strong></td>
                <td style="padding: 15px; background: #ffffff; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none; font-size: 15px;">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 15px; background: #f9fafb; vertical-align: top;"><strong style="color: #374151; font-size: 14px;">Message</strong></td>
                <td style="padding: 15px; background: #ffffff;"><span style="color: #4b5563; font-size: 15px; line-height: 1.6;">${formData.message || 'No message provided'}</span></td>
              </tr>
            </table>
            <div style="margin-top: 30px; padding: 20px; background: #fffbeb; border-radius: 8px; border: 1px solid #fbbf24;">
              <p style="color: #92400e; font-size: 14px; margin: 0; line-height: 1.5;">
                <strong>Action Required:</strong> Review this submission and respond within 5-7 business days.
              </p>
            </div>
          </div>
          <div style="background: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 13px; margin: 0;">Submitted on ${submittedDate}</p>
          </div>
        </div>`;

      const adminParams: Record<string, string> = {
        to: adminEmails,
        subject: `Join with Us: ${interestTitle}`,
        message: adminEmailHTML,
        from_name: 'SOHUB Website'
      };

      await fetch('https://ximpul.com/smtp-mailer.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(adminParams)
      });

      await fetch('https://ximpul.com/smtp-mailer.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          to: formData.email,
          subject: 'Thank You for Reaching Out — SOHUB',
          message: customerEmailHTML,
          from_name: 'SOHUB'
        })
      });

      toast.success('Thank you! We will review your submission and get back to you soon.');
      setIsModalOpen(false);
      setShowForm(false);
      setSelectedInterest('');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch {
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {isMobile ? (
        <MobileJoinUsContent setIsModalOpen={setIsModalOpen} />
      ) : (
        <DesktopJoinUsContent setIsModalOpen={setIsModalOpen} />
      )}

      {/* Modal / Dialog */}
      <Dialog open={isModalOpen} onOpenChange={(open) => {
        setIsModalOpen(open);
        if (!open) {
          setShowForm(false);
          setSelectedInterest('');
        }
      }}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full bg-white border border-gray-200 shadow-2xl rounded-2xl">
          <DialogHeader className="pb-4 border-b border-gray-100">
            <DialogTitle className="text-[24px] font-medium tracking-tight text-[#202124] text-center">Join with Us</DialogTitle>
          </DialogHeader>

          {!showForm ? (
            <div className="space-y-6 py-6 px-1 lg:px-6">
              <div>
                <label className="block text-[15px] font-medium text-[#202124] mb-3">How would you like to contribute?</label>
                <Select value={selectedInterest} onValueChange={(value) => setSelectedInterest(value as InterestType)}>
                  <SelectTrigger className="w-full bg-[#f8f9fa] border-gray-200 h-12 text-[#3c4043] rounded-xl focus:ring-[#fb8a09]">
                    <SelectValue placeholder="Choose an option..." />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 rounded-xl shadow-lg">
                    <SelectItem value="team" className="hover:bg-[#f8f9fa] cursor-pointer">🔵 Join the SOHUB Team</SelectItem>
                    <SelectItem value="invest" className="hover:bg-[#f8f9fa] cursor-pointer">🟠 Invest in SOHUB</SelectItem>
                    <SelectItem value="supplier" className="hover:bg-[#f8f9fa] cursor-pointer">🟢 Become a Supplier</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedInterest && (
                <div className="bg-[#fff7e6] border border-[#fb8a09]/10 rounded-2xl p-5 md:p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{interests[selectedInterest].emoji}</span>
                    <h3 className="text-[18px] md:text-[20px] font-medium text-[#202124]">{interests[selectedInterest].title}</h3>
                  </div>
                  <p className="text-[14px] md:text-[15px] text-[#3c4043] leading-relaxed">{interests[selectedInterest].description}</p>
                  {interests[selectedInterest].points && (
                    <div className="pt-2">
                      <p className="font-medium text-[#202124] mb-2 text-[14px] md:text-[15px]">We welcome those who understand:</p>
                      <ul className="list-none space-y-2 text-[14px] md:text-[15px] text-[#3c4043]">
                        {interests[selectedInterest].points?.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#fb8a09] mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Button
                    onClick={() => setShowForm(true)}
                    className="w-full mt-4 bg-[#fb8a09] hover:bg-[#e07a00] text-white rounded-xl h-12 text-[15px] font-medium transition-colors"
                  >
                    Continue to Form
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 py-6 px-1 lg:px-6">
              <div className="bg-[#f8f9fa] border border-gray-100 rounded-xl p-4 mb-2 flex items-center justify-center gap-2">
                <span className="text-xl">{interests[selectedInterest as keyof typeof interests].emoji}</span>
                <p className="text-[14px] md:text-[15px] font-medium text-[#202124]">
                  {interests[selectedInterest as keyof typeof interests].title}
                </p>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#3c4043] mb-1.5">Name *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  required
                  className="bg-[#f8f9fa] border-gray-200 h-12 rounded-xl focus-visible:ring-[#fb8a09]"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#3c4043] mb-1.5">Phone Number *</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="01XXXXXXXXX"
                  required
                  className="bg-[#f8f9fa] border-gray-200 h-12 rounded-xl focus-visible:ring-[#fb8a09]"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#3c4043] mb-1.5">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="bg-[#f8f9fa] border-gray-200 h-12 rounded-xl focus-visible:ring-[#fb8a09]"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#3c4043] mb-1.5">Message (Optional)</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more about yourself or your interest..."
                  rows={4}
                  className="bg-[#f8f9fa] border-gray-200 rounded-xl focus-visible:ring-[#fb8a09] resize-none p-3"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="flex-1 h-12 rounded-xl border-gray-300 text-[#3c4043] hover:bg-gray-50 focus-visible:ring-gray-200"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-12 rounded-xl bg-[#fb8a09] hover:bg-[#e07a00] text-white focus-visible:ring-[#fb8a09]"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </form>
          )}

        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default JoinUs;
