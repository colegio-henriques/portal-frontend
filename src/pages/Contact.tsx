
import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface">
      <main>
        
{/*  TopNavBar  */}
<header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline docked full-width top-0 sticky z-50">
<nav className="max-w-container-max-width mx-auto flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4">
<div className="flex items-center gap-3">
<span className="font-display-lg text-headline-md font-bold text-primary dark:text-inverse-primary leading-tight">Colégio Henriques</span>
</div>
{/*  Desktop Links  */}
<div className="hidden lg:flex items-center gap-8">
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="#">Home</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="#">About</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="#">Academic Levels</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="#">Admissions</a>
<a className="font-label-md text-label-md text-primary dark:text-inverse-primary border-b-2 border-primary font-semibold pb-1" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">language</span>
</button>
<button className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">search</span>
</button>
<a className="bg-primary text-on-primary px-6 py-2.5 font-label-md text-label-md rounded hover:bg-primary-container transition-all active:scale-95" href="#">Student Portal</a>
</div>
</nav>
</header>
<main className="min-h-screen">
{/*  Hero Section  */}
<section className="relative py-24 bg-surface-container-low overflow-hidden">
<div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
<div className="max-w-2xl">
<span className="text-secondary font-label-md text-label-md tracking-widest uppercase mb-4 block">Get In Touch</span>
<h1 className="font-display-lg text-display-lg text-primary mb-6">Connecting Our Academic Community</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Whether you are a prospective parent, a current student, or an alumnus, we are here to assist you with any inquiries regarding our campus and curriculum.</p>
</div>
</div>
<div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
<svg className="h-full w-full" viewbox="0 0 100 100">
<path className="text-primary" d="M0,0 L100,0 L100,100 L0,100 Z" fill="currentColor"></path>
</svg>
</div>
</section>
{/*  Content Grid  */}
<section className="py-20">
<div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/*  Contact Form Column  */}
<div className="lg:col-span-7 bg-white p-8 md:p-12 border border-outline-variant rounded-lg">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Send us a Message</h2>
<form className="space-y-6" id="contactForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="name">Full Name</label>
<input className="w-full bg-white border border-outline-variant px-4 py-3 rounded focus:outline-none focus:border-primary form-focus-glow transition-all" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">Email Address</label>
<input className="w-full bg-white border border-outline-variant px-4 py-3 rounded focus:outline-none focus:border-primary form-focus-glow transition-all" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="subject">Subject</label>
<select className="w-full bg-white border border-outline-variant px-4 py-3 rounded focus:outline-none focus:border-primary form-focus-glow transition-all appearance-none" id="subject">
<option>General Inquiry</option>
<option>Admissions &amp; Enrollment</option>
<option>Academic Support</option>
<option>Technical Assistance</option>
<option>Career Opportunities</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="message">Your Message</label>
<textarea className="w-full bg-white border border-outline-variant px-4 py-3 rounded focus:outline-none focus:border-primary form-focus-glow transition-all" id="message" placeholder="How can we help you today?" required="" rows="5"></textarea>
</div>
<button className="bg-primary text-on-primary px-10 py-4 font-label-md text-label-md rounded hover:bg-primary-container transition-all flex items-center gap-3" type="submit">
                                Send Message
                                <span className="material-symbols-outlined">send</span>
</button>
</form>
</div>
{/*  Info Column  */}
<div className="lg:col-span-5 space-y-gutter">
{/*  Contact Cards Bento  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
<div className="bg-surface-container p-8 border border-outline-variant rounded-lg group hover:border-primary transition-colors">
<div className="w-12 h-12 bg-primary flex items-center justify-center rounded mb-6 text-on-primary">
<span className="material-symbols-outlined">location_on</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Our Campus</h3>
<p className="font-body-md text-on-surface-variant">Rua Dr. António Henriques, 450<br/>3000-041 Coimbra, Portugal</p>
<a className="inline-block mt-4 text-primary font-label-md hover:underline" href="#">Get Directions →</a>
</div>
<div className="bg-surface-container p-8 border border-outline-variant rounded-lg group hover:border-primary transition-colors">
<div className="w-12 h-12 bg-primary flex items-center justify-center rounded mb-6 text-on-primary">
<span className="material-symbols-outlined">call</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Call Us</h3>
<div className="space-y-1">
<p className="font-body-md text-on-surface-variant">Reception: +351 239 800 000</p>
<p className="font-body-md text-on-surface-variant">Admissions: +351 239 800 111</p>
</div>
</div>
<div className="bg-surface-container p-8 border border-outline-variant rounded-lg group hover:border-primary transition-colors">
<div className="w-12 h-12 bg-primary flex items-center justify-center rounded mb-6 text-on-primary">
<span className="material-symbols-outlined">mail</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Email Inquiries</h3>
<p className="font-body-md text-on-surface-variant">info@henriques.edu.pt</p>
<p className="font-body-md text-on-surface-variant">admissions@henriques.edu.pt</p>
</div>
</div>
{/*  Social Links  */}
<div className="bg-primary text-on-primary p-8 rounded-lg">
<h3 className="font-headline-md text-headline-md mb-6">Join our Social Community</h3>
<div className="flex gap-4">
<a className="w-10 h-10 border border-on-primary/30 flex items-center justify-center rounded hover:bg-white hover:text-primary transition-all" href="#">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"></path></svg>
</a>
<a className="w-10 h-10 border border-on-primary/30 flex items-center justify-center rounded hover:bg-white hover:text-primary transition-all" href="#">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0.01,4.85,0.07c3.25,0.15,4.77,1.69,4.92,4.92c0.06,1.27,0.07,1.65,0.07,4.85s-0.01,3.58-0.07,4.85 c-0.15,3.23-1.66,4.77-4.92,4.92c-1.27,0.06-1.64,0.07-4.85,0.07s-3.58-0.01-4.85-0.07c-3.26-0.15-4.77-1.7-4.92-4.92 c-0.06-1.27-0.07-1.64-0.07-4.85s0.01-3.58,0.07-4.85c0.15-3.23,1.66-4.77,4.92-4.92C8.42,2.17,8.8,2.16,12,2.16 M12,0.5 c-3.26,0-3.67,0.01-4.95,0.07C3.16,0.76,0.76,3.16,0.57,7.05C0.51,8.33,0.5,8.74,0.5,12s0.01,3.67,0.07,4.95 c0.19,3.89,2.59,6.29,6.48,6.48c1.28,0.06,1.69,0.07,4.95,0.07s3.67-0.01,4.95-0.07c3.89-0.19,6.29-2.59,6.48-6.48 c0.06-1.28,0.07-1.69,0.07-4.95s-0.01-3.67-0.07-4.95c-0.19-3.89-2.59-6.29-6.48-6.48C15.67,0.51,15.26,0.5,12,0.5L12,0.5z M12,5.83 c-3.41,0-6.17,2.76-6.17,6.17s2.76,6.17,6.17,6.17s6.17-2.76,6.17-6.17S15.41,5.83,12,5.83z M12,16.5c-2.49,0-4.5-2.01-4.5-4.5 s2.01-4.5,4.5-4.5s4.5,2.01,4.5,4.5S14.49,16.5,12,16.5z M18.41,4.15c-0.9,0-1.62,0.73-1.62,1.62s0.73,1.62,1.62,1.62 s1.62-0.73,1.62-1.62S19.31,4.15,18.41,4.15z"></path></svg>
</a>
<a className="w-10 h-10 border border-on-primary/30 flex items-center justify-center rounded hover:bg-white hover:text-primary transition-all" href="#">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M23.95,4.57c-0.88,0.39-1.83,0.65-2.82,0.77c1.02-0.61,1.8-1.58,2.17-2.73c-0.95,0.56-2.01,0.97-3.14,1.19 c-0.9-0.96-2.18-1.56-3.6-1.56c-2.72,0-4.93,2.21-4.93,4.93c0,0.39,0.04,0.76,0.13,1.13c-4.1-0.21-7.73-2.17-10.16-5.15 c-0.42,0.73-0.67,1.58-0.67,2.48c0,1.71,0.87,3.22,2.19,4.1c-0.81-0.03-1.56-0.25-2.23-0.61c0,0.02,0,0.04,0,0.07 c0,2.39,1.7,4.38,3.95,4.83c-0.41,0.11-0.85,0.17-1.3,0.17c-0.32,0-0.63-0.03-0.93-0.09c0.63,1.96,2.45,3.38,4.6,3.42 c-1.68,1.32-3.8,2.1-6.1,2.1c-0.4,0-0.79-0.02-1.18-0.07c2.18,1.4,4.76,2.21,7.55,2.21c9.05,0,14-7.5,14-14 c0-0.21,0-0.43-0.01-0.64C22.48,6.42,23.3,5.56,23.95,4.57z"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Map Section  */}
<section className="w-full h-[500px] bg-surface-container relative">
<div className="absolute inset-0 grayscale opacity-80" data-location="Coimbra, Portugal" style="">
{/*  Map Integration Placeholder  */}
<div className="w-full h-full flex flex-col items-center justify-center bg-surface-container-high border-y border-outline-variant">
<span className="material-symbols-outlined text-outline text-6xl mb-4">map</span>
<p className="font-headline-md text-on-surface-variant">Interactive Campus Map</p>
<p className="font-body-md text-outline">Map Location: Coimbra, Portugal</p>
<div className="mt-6 flex gap-4">
<button className="bg-primary text-on-primary px-6 py-2 rounded text-label-md">Open in Maps</button>
<button className="bg-white border border-outline-variant px-6 py-2 rounded text-label-md">Campus Tour</button>
</div>
</div>
</div>
{/*  Floating Address Overlay  */}
<div className="absolute bottom-12 left-12 bg-white p-6 rounded shadow-lg max-w-xs border border-outline-variant z-10 hidden md:block">
<p className="font-label-md text-primary mb-2">Main Office</p>
<p className="font-body-md text-on-surface">Rua Dr. António Henriques, 450<br/>3000-041 Coimbra</p>
<div className="mt-4 pt-4 border-t border-outline-variant flex gap-4 text-primary">
<span className="material-symbols-outlined cursor-pointer hover:opacity-70">directions</span>
<span className="material-symbols-outlined cursor-pointer hover:opacity-70">share</span>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-primary dark:bg-on-primary-fixed full-width">
<div className="max-w-container-max-width mx-auto py-16 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="col-span-1 md:col-span-1">
<span className="font-display-lg text-headline-md text-on-primary dark:text-inverse-primary block mb-6">Colégio Henriques</span>
<p className="text-on-primary-container dark:text-on-surface-variant font-body-md leading-relaxed">
                    Excellence in education since 1985. Shaping the minds of future leaders through rigorous academics and character building.
                </p>
</div>
<div>
<h4 className="text-on-primary font-label-md text-label-md uppercase tracking-wider mb-6">Quick Links</h4>
<ul className="space-y-4">
<li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-secondary-fixed transition-colors duration-200 font-label-md" href="#">Home</a></li>
<li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-secondary-fixed transition-colors duration-200 font-label-md" href="#">About Us</a></li>
<li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-secondary-fixed transition-colors duration-200 font-label-md" href="#">Curriculum</a></li>
<li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-secondary-fixed transition-colors duration-200 font-label-md" href="#">Admissions</a></li>
</ul>
</div>
<div>
<h4 className="text-on-primary font-label-md text-label-md uppercase tracking-wider mb-6">Support</h4>
<ul className="space-y-4">
<li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-secondary-fixed transition-colors duration-200 font-label-md" href="#">Institutional Privacy</a></li>
<li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-secondary-fixed transition-colors duration-200 font-label-md" href="#">Term of Use</a></li>
<li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-secondary-fixed transition-colors duration-200 font-label-md" href="#">Campus Map</a></li>
<li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-secondary-fixed transition-colors duration-200 font-label-md" href="#">Accessibility</a></li>
<li><a className="text-on-primary-container dark:text-on-surface-variant hover:text-secondary-fixed transition-colors duration-200 font-label-md" href="#">Work with Us</a></li>
</ul>
</div>
<div>
<h4 className="text-on-primary font-label-md text-label-md uppercase tracking-wider mb-6">Connect</h4>
<div className="flex gap-4 mb-6">
{/*  Social icons already styled in main section, repeated here for consistency  */}
<span className="material-symbols-outlined text-on-primary-container cursor-pointer hover:text-secondary-fixed">face_nod</span>
<span className="material-symbols-outlined text-on-primary-container cursor-pointer hover:text-secondary-fixed">photo_camera</span>
<span className="material-symbols-outlined text-on-primary-container cursor-pointer hover:text-secondary-fixed">alternate_email</span>
</div>
<p className="text-on-primary-container text-label-md italic">Subscribe to our newsletter for campus updates.</p>
</div>
</div>
<div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-white/10 text-center">
<p className="text-on-primary-container text-caption opacity-70">
                © 2024 Colégio Henriques. All rights reserved. Providing excellence in education since 1985.
            </p>
</div>
</footer>


      </main>
    </div>
  );
}
