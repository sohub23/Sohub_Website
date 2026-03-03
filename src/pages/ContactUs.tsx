import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Facebook,
    Linkedin,
    Instagram,
    Youtube,
    ArrowUpRight,
    MessageSquare,
    Building2,
    Headphones,
    Navigation,
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
    }),
};

/* ──────────────────────────────────────────────
   DESKTOP VERSION
   ────────────────────────────────────────────── */
const DesktopContactContent = ({
    formData,
    setFormData,
    isSubmitting,
    handleSubmit,
}: {
    formData: { name: string; email: string; phone: string; subject: string; message: string };
    setFormData: React.Dispatch<React.SetStateAction<typeof formData>>;
    isSubmitting: boolean;
    handleSubmit: (e: React.FormEvent) => void;
}) => {
    return (
        <main className="pt-32 pb-24">
            {/* Hero */}
            <div className="max-w-[1280px] mx-auto px-6 text-center mb-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[48px] font-normal tracking-tight text-[#202124] mb-4"
                >
                    Get in Touch
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[20px] text-[#5f6368] font-normal max-w-2xl mx-auto"
                >
                    Have a question, feedback, or partnership inquiry? We'd love to hear from you.
                </motion.p>
            </div>

            {/* Quick-access icons row */}
            <div className="max-w-[1280px] mx-auto px-6 mb-12">
                <div className="flex flex-wrap justify-center gap-12">
                    {[
                        { icon: MessageSquare, label: 'General Inquiry', color: '#fb8a09', bg: '#fff7e6' },
                        { icon: Headphones, label: 'Customer Support', color: '#fb8a09', bg: '#fff7e6' },
                        { icon: Building2, label: 'Business & Partnerships', color: '#fb8a09', bg: '#fff7e6' },
                    ].map((item, i) => (
                        <motion.a
                            key={item.label}
                            href="#contact-form"
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
                                style={{ backgroundColor: item.bg }}
                            >
                                <item.icon className="w-7 h-7" style={{ color: item.color }} />
                            </div>
                            <span className="text-[#3c4043] font-medium text-[15px] group-hover:text-[#fb8a09] transition-colors">
                                {item.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Main Content: Form + Info */}
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex gap-8">
                    {/* Left: Contact Form */}
                    <motion.div
                        id="contact-form"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 bg-white rounded-[28px] border border-gray-100 p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                    >
                        <h2 className="text-[28px] font-normal tracking-tight text-[#202124] mb-2">
                            Send us a message
                        </h2>
                        <p className="text-[16px] text-[#5f6368] mb-5">
                            Fill out the form below and we'll get back to you within 1–2 business days.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[14px] font-medium text-[#3c4043] mb-1.5">Full Name *</label>
                                    <Input
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Your full name"
                                        required
                                        className="bg-[#f8f9fa] border-gray-200 h-14 rounded-xl focus-visible:ring-[#fb8a09] text-[15px]"
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
                                        className="bg-[#f8f9fa] border-gray-200 h-14 rounded-xl focus-visible:ring-[#fb8a09] text-[15px]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[14px] font-medium text-[#3c4043] mb-1.5">Phone</label>
                                    <Input
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+880 1XXXXXXXXX"
                                        className="bg-[#f8f9fa] border-gray-200 h-14 rounded-xl focus-visible:ring-[#fb8a09] text-[15px]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-medium text-[#3c4043] mb-1.5">Subject *</label>
                                    <Input
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        placeholder="How can we help?"
                                        required
                                        className="bg-[#f8f9fa] border-gray-200 h-14 rounded-xl focus-visible:ring-[#fb8a09] text-[15px]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[14px] font-medium text-[#3c4043] mb-1.5">Message *</label>
                                <Textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell us more about your inquiry..."
                                    required
                                    rows={6}
                                    className="bg-[#f8f9fa] border-gray-200 rounded-xl focus-visible:ring-[#fb8a09] resize-none p-4 text-[15px]"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="h-12 px-8 bg-[#fb8a09] hover:bg-[#e07a00] text-white rounded-full text-[15px] font-medium transition-colors flex items-center gap-2"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>

                    {/* Right: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="w-[420px] flex-shrink-0 flex flex-col gap-6"
                    >
                        {/* Info Card */}
                        <div className="bg-[#f8f9fa] rounded-[28px] p-8 border border-gray-100">
                            <h3 className="text-[24px] font-normal tracking-tight text-[#202124] mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <a href="mailto:hello@sohub.com.bd" className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-[#fff7e6] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Mail className="w-5 h-5 text-[#fb8a09]" />
                                    </div>
                                    <div>
                                        <p className="text-[14px] font-medium text-[#3c4043] mb-0.5">Email Us</p>
                                        <p className="text-[15px] text-[#5f6368] group-hover:text-[#fb8a09] transition-colors">
                                            hello@sohub.com.bd
                                        </p>
                                    </div>
                                </a>

                                <a href="tel:+8809678076482" className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-[#fff7e6] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Phone className="w-5 h-5 text-[#fb8a09]" />
                                    </div>
                                    <div>
                                        <p className="text-[14px] font-medium text-[#3c4043] mb-0.5">Call Us</p>
                                        <p className="text-[15px] text-[#5f6368] group-hover:text-[#fb8a09] transition-colors">
                                            +88 09678-076482
                                        </p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#fff7e6] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <MapPin className="w-5 h-5 text-[#fb8a09]" />
                                    </div>
                                    <div>
                                        <p className="text-[14px] font-medium text-[#3c4043] mb-0.5">Visit Us</p>
                                        <p className="text-[15px] text-[#5f6368] leading-relaxed">
                                            Flat #C2, House, 29 Katasur Rd,<br />
                                            Dhaka 1207
                                        </p>
                                        <a
                                            href="https://www.google.com/maps/dir/?api=1&destination=Flat+C2+House+29+Katasur+Rd+Dhaka+1207"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 mt-2 text-[13px] font-medium text-[#fb8a09] hover:text-[#e07a00] transition-colors"
                                        >
                                            <Navigation className="w-3.5 h-3.5" />
                                            Get Directions
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#fff7e6] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Clock className="w-5 h-5 text-[#fb8a09]" />
                                    </div>
                                    <div>
                                        <p className="text-[14px] font-medium text-[#3c4043] mb-0.5">Working Hours</p>
                                        <p className="text-[15px] text-[#5f6368]">
                                            Sun – Thu: 10:00 AM – 6:30 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Card */}
                        <div className="bg-[#fff7e6] rounded-[28px] p-8 border border-[#fb8a09]/10">
                            <h3 className="text-[20px] font-normal tracking-tight text-[#202124] mb-4">
                                Follow Us
                            </h3>
                            <p className="text-[15px] text-[#3c4043] mb-6 leading-relaxed">
                                Stay updated with our latest products, initiatives, and innovations.
                            </p>
                            <div className="flex items-center gap-4">
                                {[
                                    { icon: Facebook, href: 'https://www.facebook.com/solutionhubtechnologies', label: 'Facebook' },
                                    { icon: Linkedin, href: 'https://bd.linkedin.com/company/solution-hub-technologie-sohub', label: 'LinkedIn' },
                                    { icon: Instagram, href: 'https://www.instagram.com/solutionhubtechnologies/', label: 'Instagram' },
                                    { icon: Youtube, href: 'https://www.youtube.com/@solutionhubtechnologysohub', label: 'YouTube' },
                                ].map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-full bg-white/80 border border-[#fb8a09]/15 flex items-center justify-center text-[#fb8a09] hover:bg-[#fb8a09] hover:text-white transition-all duration-300 hover:scale-105"
                                        aria-label={s.label}
                                    >
                                        <s.icon className="w-5 h-5" strokeWidth={1.5} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Link */}
                        <a
                            href="/join-us"
                            className="group flex items-center justify-between bg-[#f1f3f4] rounded-[28px] p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
                        >
                            <div>
                                <p className="text-[16px] font-medium text-[#202124] mb-1">Want to join SOHUB?</p>
                                <p className="text-[14px] text-[#5f6368]">Explore career and partnership opportunities</p>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#fb8a09] group-hover:bg-[#fff7e6] transition-colors flex-shrink-0">
                                <ArrowUpRight className="w-5 h-5 text-[#fb8a09]" />
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION
   ────────────────────────────────────────────── */
const MobileContactContent = ({
    formData,
    setFormData,
    isSubmitting,
    handleSubmit,
}: {
    formData: { name: string; email: string; phone: string; subject: string; message: string };
    setFormData: React.Dispatch<React.SetStateAction<typeof formData>>;
    isSubmitting: boolean;
    handleSubmit: (e: React.FormEvent) => void;
}) => {
    return (
        <main className="pt-24 pb-12">
            {/* Hero */}
            <div className="px-5 text-center mb-10">
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[32px] font-normal tracking-tight text-[#202124] mb-3"
                >
                    Get in Touch
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[16px] text-[#5f6368] font-normal px-2"
                >
                    Have a question or inquiry? We'd love to hear from you.
                </motion.p>
            </div>

            {/* Quick-access icons */}
            <div className="px-5 mb-10">
                <div className="flex justify-center gap-8">
                    {[
                        { icon: MessageSquare, label: 'General', color: '#fb8a09', bg: '#fff7e6' },
                        { icon: Headphones, label: 'Support', color: '#fb8a09', bg: '#fff7e6' },
                        { icon: Building2, label: 'Business', color: '#fb8a09', bg: '#fff7e6' },
                    ].map((item) => (
                        <a key={item.label} href="#contact-form-mobile" className="flex flex-col items-center gap-2">
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: item.bg }}
                            >
                                <item.icon className="w-6 h-6" style={{ color: item.color }} />
                            </div>
                            <span className="text-[#3c4043] font-medium text-[13px]">{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Contact Info Cards */}
            <div className="px-5 mb-8">
                <div className="bg-[#f8f9fa] rounded-[24px] p-6 border border-gray-100 space-y-5">
                    <a href="mailto:hello@sohub.com.bd" className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#fff7e6] flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-[#fb8a09]" />
                        </div>
                        <div>
                            <p className="text-[13px] font-medium text-[#3c4043]">Email Us</p>
                            <p className="text-[14px] text-[#5f6368]">hello@sohub.com.bd</p>
                        </div>
                    </a>

                    <a href="tel:+8809678076482" className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#fff7e6] flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-[#fb8a09]" />
                        </div>
                        <div>
                            <p className="text-[13px] font-medium text-[#3c4043]">Call Us</p>
                            <p className="text-[14px] text-[#5f6368]">+88 09678-076482</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#fff7e6] flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-[#fb8a09]" />
                        </div>
                        <div>
                            <p className="text-[13px] font-medium text-[#3c4043]">Visit Us</p>
                            <p className="text-[14px] text-[#5f6368]">Flat #C2, 29 Katasur Rd, Dhaka 1207</p>
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Flat+C2+House+29+Katasur+Rd+Dhaka+1207"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 mt-1.5 text-[12px] font-medium text-[#fb8a09] hover:text-[#e07a00] transition-colors"
                            >
                                <Navigation className="w-3 h-3" />
                                Get Directions
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#fff7e6] flex items-center justify-center flex-shrink-0">
                            <Clock className="w-5 h-5 text-[#fb8a09]" />
                        </div>
                        <div>
                            <p className="text-[13px] font-medium text-[#3c4043]">Hours</p>
                            <p className="text-[14px] text-[#5f6368]">Sun – Thu: 10 AM – 6:30 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form-mobile" className="px-5 mb-8">
                <div className="bg-white rounded-[24px] border border-gray-100 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                    <h2 className="text-[24px] font-normal tracking-tight text-[#202124] mb-2">
                        Send us a message
                    </h2>
                    <p className="text-[14px] text-[#5f6368] mb-6">
                        We'll respond within 1–2 business days.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-[13px] font-medium text-[#3c4043] mb-1.5">Full Name *</label>
                            <Input
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Your full name"
                                required
                                className="bg-[#f8f9fa] border-gray-200 h-12 rounded-xl focus-visible:ring-[#fb8a09] text-[15px]"
                            />
                        </div>

                        <div>
                            <label className="block text-[13px] font-medium text-[#3c4043] mb-1.5">Email *</label>
                            <Input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="your@email.com"
                                required
                                className="bg-[#f8f9fa] border-gray-200 h-12 rounded-xl focus-visible:ring-[#fb8a09] text-[15px]"
                            />
                        </div>

                        <div>
                            <label className="block text-[13px] font-medium text-[#3c4043] mb-1.5">Phone</label>
                            <Input
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+880 1XXXXXXXXX"
                                className="bg-[#f8f9fa] border-gray-200 h-12 rounded-xl focus-visible:ring-[#fb8a09] text-[15px]"
                            />
                        </div>

                        <div>
                            <label className="block text-[13px] font-medium text-[#3c4043] mb-1.5">Subject *</label>
                            <Input
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                placeholder="How can we help?"
                                required
                                className="bg-[#f8f9fa] border-gray-200 h-12 rounded-xl focus-visible:ring-[#fb8a09] text-[15px]"
                            />
                        </div>

                        <div>
                            <label className="block text-[13px] font-medium text-[#3c4043] mb-1.5">Message *</label>
                            <Textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Tell us more..."
                                required
                                rows={5}
                                className="bg-[#f8f9fa] border-gray-200 rounded-xl focus-visible:ring-[#fb8a09] resize-none p-4 text-[15px]"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 bg-[#fb8a09] hover:bg-[#e07a00] text-white rounded-full text-[15px] font-medium transition-colors flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            <Send className="w-4 h-4" />
                        </Button>
                    </form>
                </div>
            </div>

            {/* Social Row */}
            <div className="px-5 mb-8">
                <div className="bg-[#fff7e6] rounded-[24px] p-6 border border-[#fb8a09]/10 text-center">
                    <h3 className="text-[18px] font-normal tracking-tight text-[#202124] mb-3">Follow Us</h3>
                    <div className="flex items-center justify-center gap-4">
                        {[
                            { icon: Facebook, href: 'https://www.facebook.com/solutionhubtechnologies' },
                            { icon: Linkedin, href: 'https://bd.linkedin.com/company/solution-hub-technologie-sohub' },
                            { icon: Instagram, href: 'https://www.instagram.com/solutionhubtechnologies/' },
                            { icon: Youtube, href: 'https://www.youtube.com/@solutionhubtechnologysohub' },
                        ].map((s, i) => (
                            <a
                                key={i}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-white/80 border border-[#fb8a09]/15 flex items-center justify-center text-[#fb8a09] hover:bg-[#fb8a09] hover:text-white transition-all duration-300"
                            >
                                <s.icon className="w-5 h-5" strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Join Us Link */}
            <div className="px-5 mb-8">
                <a
                    href="/join-us"
                    className="flex items-center justify-between bg-[#f1f3f4] rounded-[24px] p-5 border border-gray-100"
                >
                    <div>
                        <p className="text-[15px] font-medium text-[#202124] mb-0.5">Want to join SOHUB?</p>
                        <p className="text-[13px] text-[#5f6368]">Explore opportunities</p>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                        <ArrowUpRight className="w-4 h-4 text-[#fb8a09]" />
                    </div>
                </a>
            </div>
        </main>
    );
};

/* ──────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────── */
const ContactUs = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    useEffect(() => {
        document.title = 'Contact Us - SOHUB';
        window.scrollTo(0, 0);
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);

        try {
            const year = new Date().getFullYear();
            const submittedDate = new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' });

            const customerEmailHTML = `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #fb8a09 0%, #e07a00 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Thank You for Reaching Out</h1>
          </div>
          <div style="padding: 40px 30px; background: #ffffff;">
            <h2 style="color: #202124; margin: 0 0 20px 0; font-size: 24px;">Hi ${formData.name},</h2>
            <p style="color: #3c4043; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              We've received your message and our team will review it shortly.
            </p>
            <div style="background: #f8f9fa; border-left: 4px solid #fb8a09; padding: 20px; margin: 0 0 25px 0; border-radius: 4px;">
              <p style="color: #5f6368; font-size: 14px; margin: 0 0 5px 0;"><strong>Subject:</strong> ${formData.subject}</p>
              <p style="color: #5f6368; font-size: 14px; margin: 0;">${formData.message}</p>
            </div>
            <p style="color: #3c4043; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
              We typically respond within <strong>1–2 business days</strong>. If your inquiry is urgent, feel free to call us directly.
            </p>
            <div style="border-top: 2px solid #e5e7eb; padding-top: 25px; margin-top: 30px;">
              <p style="margin: 0 0 8px 0;">
                <a href="https://sohub.com.bd" style="color: #fb8a09; text-decoration: none; font-size: 14px;">&rarr; Visit SOHUB</a>
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
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 35px 30px; background: #ffffff;">
            <div style="background: #fff8e1; border-left: 4px solid #fb8a09; padding: 20px; margin: 0 0 30px 0; border-radius: 4px;">
              <p style="color: #fb8a09; font-size: 18px; font-weight: 600; margin: 0;">${formData.subject}</p>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 15px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; width: 140px;"><strong style="color: #374151; font-size: 14px;">Name</strong></td>
                <td style="padding: 15px; background: #ffffff; border-bottom: 1px solid #e5e7eb;"><span style="color: #1d1d1f; font-size: 15px;">${formData.name}</span></td>
              </tr>
              <tr>
                <td style="padding: 15px; background: #f9fafb; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151; font-size: 14px;">Email</strong></td>
                <td style="padding: 15px; background: #ffffff; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none; font-size: 15px;">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 15px; background: #f9fafb; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151; font-size: 14px;">Phone</strong></td>
                <td style="padding: 15px; background: #ffffff; border-bottom: 1px solid #e5e7eb;"><span style="color: #1d1d1f; font-size: 15px;">${formData.phone || 'Not provided'}</span></td>
              </tr>
              <tr>
                <td style="padding: 15px; background: #f9fafb; vertical-align: top;"><strong style="color: #374151; font-size: 14px;">Message</strong></td>
                <td style="padding: 15px; background: #ffffff;"><span style="color: #4b5563; font-size: 15px; line-height: 1.6;">${formData.message}</span></td>
              </tr>
            </table>
            <div style="margin-top: 30px; padding: 20px; background: #fffbeb; border-radius: 8px; border: 1px solid #fbbf24;">
              <p style="color: #92400e; font-size: 14px; margin: 0; line-height: 1.5;">
                <strong>Action Required:</strong> Respond to this inquiry within 1–2 business days.
              </p>
            </div>
          </div>
          <div style="background: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 13px; margin: 0;">Submitted on ${submittedDate}</p>
          </div>
        </div>`;

            // Send admin notification
            await fetch('https://ximpul.com/smtp-mailer.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    to: 'hello@sohub.com.bd',
                    subject: `Contact Form: ${formData.subject}`,
                    message: adminEmailHTML,
                    from_name: 'SOHUB Website',
                }),
            });

            // Send confirmation to user
            await fetch('https://ximpul.com/smtp-mailer.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    to: formData.email,
                    subject: 'Thank You for Contacting SOHUB',
                    message: customerEmailHTML,
                    from_name: 'SOHUB',
                }),
            });

            toast.success('Message sent! We\'ll get back to you soon.');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch {
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {isMobile ? (
                <MobileContactContent
                    formData={formData}
                    setFormData={setFormData}
                    isSubmitting={isSubmitting}
                    handleSubmit={handleSubmit}
                />
            ) : (
                <DesktopContactContent
                    formData={formData}
                    setFormData={setFormData}
                    isSubmitting={isSubmitting}
                    handleSubmit={handleSubmit}
                />
            )}

            <Footer />
        </div>
    );
};

export default ContactUs;
