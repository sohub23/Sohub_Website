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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-[18px] text-[#3c4043]">
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
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09]">✓</div>
              <span>EMP — Execution & accountability</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09]">✓</div>
              <span>Tolpar — The SOHUB superapp</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09]">✓</div>
              <span>SOHUB Controls — Smart control solutions</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09]">✓</div>
              <span>Machine By SOHUB — Industrial automation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09]">✓</div>
              <span>Filmic — Content that moves culture</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09]">✓</div>
              <span>Clowee — Smart laundry solutions</span>
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
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09] text-xs mt-0.5">✓</div>
              <span>EMP — Execution & accountability</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09] text-xs mt-0.5">✓</div>
              <span>Tolpar — The SOHUB superapp</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09] text-xs mt-0.5">✓</div>
              <span>SOHUB Controls — Smart control solutions</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09] text-xs mt-0.5">✓</div>
              <span>Machine By SOHUB — Industrial automation</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09] text-xs mt-0.5">✓</div>
              <span>Filmic — Content that moves culture</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fb8a09]/10 flex items-center justify-center text-[#fb8a09] text-xs mt-0.5">✓</div>
              <span>Clowee — Smart laundry solutions</span>
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
        <div style="font-family: 'Segoe UI', 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #fb8a09 0%, #e07a00 50%, #d4720a 100%); padding: 48px 30px 40px; text-align: center;">
            <div style="margin-bottom: 20px;">
              <span style="font-size: 32px; font-weight: 800; color: #ffffff; letter-spacing: 3px;">SOHUB</span>
            </div>
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 500; opacity: 0.95;">Welcome Aboard!</h1>
          </div>

          <!-- Body -->
          <div style="padding: 40px 35px 30px; background: #ffffff;">
            <h2 style="color: #202124; margin: 0 0 16px 0; font-size: 22px; font-weight: 600;">Thank You, ${formData.name} 🎉</h2>
            <p style="color: #3c4043; font-size: 15px; line-height: 1.7; margin: 0 0 24px 0;">
              We're thrilled to receive your interest in being a part of SOHUB. Every great journey starts with a single step — and you've just taken yours.
            </p>

            <!-- Interest Badge -->
            <div style="background: linear-gradient(135deg, #fff9f0 0%, #fff5e6 100%); border: 1px solid #fde8c8; border-radius: 12px; padding: 24px; margin: 0 0 28px 0; text-align: center;">
              <p style="color: #b45309; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin: 0 0 10px 0;">Your Interest</p>
              <p style="color: #9a3412; font-size: 20px; font-weight: 700; margin: 0;">${interestTitle}</p>
            </div>

            <!-- What's Next -->
            <div style="background: #f0fdf4; border-radius: 10px; padding: 20px; margin: 0 0 28px 0; border: 1px solid #bbf7d0;">
              <p style="color: #166534; font-size: 14px; font-weight: 700; margin: 0 0 8px 0;">📋 What happens next?</p>
              <p style="color: #166534; font-size: 14px; margin: 0; line-height: 1.6;">
                Our team carefully reviews every application. If your profile matches our values and vision, we'll reach out within <strong>5–7 business days</strong>.
              </p>
            </div>

            <!-- CTA -->
            <div style="text-align: center; margin: 32px 0 20px;">
              <a href="https://sohub.com.bd" style="display: inline-block; background: linear-gradient(135deg, #fb8a09 0%, #e07a00 100%); color: #ffffff; text-decoration: none; padding: 14px 36px; border-radius: 50px; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;">Explore SOHUB →</a>
            </div>
          </div>

          <!-- Social Links -->
          <div style="background: #fafafa; padding: 28px 30px; text-align: center; border-top: 1px solid #f0f0f0;">
            <p style="color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 14px 0; font-weight: 600;">Follow Us</p>
            <div style="margin-bottom: 20px;">
              <a href="https://www.facebook.com/solutionhubtechnologies" style="display: inline-block; margin: 0 6px; text-decoration: none; color: #fb8a09; font-size: 13px; font-weight: 500;">Facebook</a>
              <span style="color: #d1d5db;">•</span>
              <a href="https://bd.linkedin.com/company/solution-hub-technologie-sohub" style="display: inline-block; margin: 0 6px; text-decoration: none; color: #fb8a09; font-size: 13px; font-weight: 500;">LinkedIn</a>
              <span style="color: #d1d5db;">•</span>
              <a href="https://www.instagram.com/sohub.tech/" style="display: inline-block; margin: 0 6px; text-decoration: none; color: #fb8a09; font-size: 13px; font-weight: 500;">Instagram</a>
              <span style="color: #d1d5db;">•</span>
              <a href="https://www.youtube.com/@solutionhubtechnologysohub" style="display: inline-block; margin: 0 6px; text-decoration: none; color: #fb8a09; font-size: 13px; font-weight: 500;">YouTube</a>
            </div>
            <p style="color: #202124; font-size: 15px; font-weight: 700; margin: 0 0 4px 0; letter-spacing: 1px;">SOHUB</p>
            <p style="color: #6b7280; font-size: 13px; margin: 0 0 4px 0;">Solution Hub Technologies</p>
            <p style="color: #d1d5db; font-size: 11px; margin: 12px 0 0 0;">© ${year} SOHUB. All rights reserved.</p>
          </div>
        </div>`;

      const adminEmailHTML = `
        <div style="font-family: 'Segoe UI', 'Inter', Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #f4f5f7;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 36px 32px 28px; text-align: center; border-radius: 12px 12px 0 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
              <tr><td align="center"><span style="font-size: 28px; font-weight: 800; color: #fb8a09; letter-spacing: 4px;">SOHUB</span></td></tr>
            </table>
            <p style="color: rgba(255,255,255,0.5); font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px 0;">New Application Received</p>
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; line-height: 1.3;">🚀 Join with Us — Submission</h1>
            <div style="margin-top: 16px; display: inline-block; background: rgba(251,138,9,0.15); border: 1px solid rgba(251,138,9,0.3); border-radius: 20px; padding: 6px 16px;">
              <span style="color: #fb8a09; font-size: 12px; font-weight: 600;">${submittedDate}</span>
            </div>
          </div>

          <!-- Interest Card -->
          <div style="margin: 20px 20px 0; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%); padding: 18px 24px; border-bottom: 1px solid #fed7aa;">
              <p style="color: #c2410c; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; font-weight: 800; margin: 0 0 6px 0;">Interest Type</p>
              <p style="color: #9a3412; font-size: 18px; font-weight: 700; margin: 0; line-height: 1.3;">${interestTitle}</p>
            </div>
          </div>

          <!-- Contact Info -->
          <div style="margin: 12px 20px 0; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
            <div style="padding: 18px 24px; border-bottom: 1px solid #f1f5f9;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="40" valign="top"><div style="width: 36px; height: 36px; background: linear-gradient(135deg, #dbeafe, #eff6ff); border-radius: 10px; text-align: center; line-height: 36px; font-size: 16px;">👤</div></td>
                  <td style="padding-left: 14px;">
                    <p style="color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; margin: 0 0 4px 0;">Full Name</p>
                    <p style="color: #0f172a; font-size: 16px; font-weight: 600; margin: 0;">${formData.name}</p>
                  </td>
                </tr>
              </table>
            </div>
            <div style="padding: 18px 24px; border-bottom: 1px solid #f1f5f9;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="40" valign="top"><div style="width: 36px; height: 36px; background: linear-gradient(135deg, #d1fae5, #ecfdf5); border-radius: 10px; text-align: center; line-height: 36px; font-size: 16px;">📱</div></td>
                  <td style="padding-left: 14px;">
                    <p style="color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; margin: 0 0 4px 0;">Phone</p>
                    <p style="color: #0f172a; font-size: 16px; font-weight: 600; margin: 0;">${formData.phone}</p>
                  </td>
                </tr>
              </table>
            </div>
            <div style="padding: 18px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="40" valign="top"><div style="width: 36px; height: 36px; background: linear-gradient(135deg, #fef3c7, #fffbeb); border-radius: 10px; text-align: center; line-height: 36px; font-size: 16px;">📧</div></td>
                  <td style="padding-left: 14px;">
                    <p style="color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; margin: 0 0 4px 0;">Email Address</p>
                    <a href="mailto:${formData.email}" style="color: #fb8a09; font-size: 16px; font-weight: 600; text-decoration: none;">${formData.email}</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <!-- Message Card -->
          ${formData.message ? `
          <div style="margin: 12px 20px 0; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
            <div style="padding: 20px 24px; border-bottom: 1px solid #f1f5f9;">
              <p style="color: #94a3b8; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; font-weight: 800; margin: 0;">💬 Additional Message</p>
            </div>
            <div style="padding: 20px 24px 24px;">
              <p style="color: #334155; font-size: 15px; line-height: 1.8; margin: 0; white-space: pre-wrap;">${formData.message}</p>
            </div>
          </div>` : ''}

          <!-- Quick Actions -->
          <div style="margin: 16px 20px 0; background: linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%); border-radius: 12px; border: 1px solid #fbbf24; padding: 20px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="color: #92400e; font-size: 14px; font-weight: 700; margin: 0 0 6px 0;">⚡ Action Required</p>
                  <p style="color: #a16207; font-size: 13px; margin: 0; line-height: 1.5;">Review and respond within 5–7 business days.</p>
                </td>
                <td width="120" align="right" valign="middle">
                  <a href="mailto:${formData.email}" style="display: inline-block; background: #fb8a09; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: 700;">Reply →</a>
                </td>
              </tr>
            </table>
          </div>

          <!-- Footer -->
          <div style="padding: 24px 20px; text-align: center;">
            <p style="color: #94a3b8; font-size: 11px; margin: 0;">SOHUB Recruitment System • ${submittedDate}</p>
            <p style="color: #cbd5e1; font-size: 10px; margin: 8px 0 0 0;">Solution Hub Technologies — Begin Different. Win Different.</p>
          </div>
        </div>`;

      const adminParams: Record<string, string> = {
        to: 'razinahmed60@gmail.com',
        subject: `Join with Us: ${interestTitle}`,
        message: adminEmailHTML,
        from_name: 'SOHUB Website',
        reply_to: formData.email,
      };

      const adminRes = await fetch('/server/smtp-mailer.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(adminParams)
      });

      if (!adminRes.ok) {
        throw new Error('Admin email failed');
      }

      const customerRes = await fetch('/server/smtp-mailer.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          to: formData.email,
          subject: 'Thank You for Reaching Out — SOHUB',
          message: customerEmailHTML,
          from_name: 'SOHUB'
        })
      });

      if (!customerRes.ok) {
        throw new Error('Customer email failed');
      }

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
