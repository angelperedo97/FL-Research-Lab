---
layout: ../layouts/BaseLayout.astro
title: "Home"
---

<div class="mb-14">
  <span class="text-xs font-bold tracking-widest text-rit-orange uppercase block mb-2">University of Texas Rio Grande Valley</span>
  <h1 class="text-4xl md:text-5xl font-black tracking-tight text-text mb-6">Federated Learning & Intelligent Systems Research Lab</h1>
  <p class="text-lg text-text-dim leading-relaxed max-w-4xl">
    Directed by Dr. Sergei Chuprov in the Department of Computer Science, our laboratory conducts foundational and applied research focused on the design, optimization, and security of distributed computing systems. Our primary trajectory centers on Federated Learning foundations—developing robust personalization frameworks and decentralized optimization algorithms—alongside interdisciplinary machine learning applications across sensing and engineering domains.
  </p>
</div>

<div class="w-full text-center mt-16 mb-2">
  <h2 class="text-2xl font-extrabold tracking-tight text-rit-orange-text uppercase tracking-wide">Research Topics</h2>
</div>
<div class="w-full mb-10 border-t border-line"></div>

<div class="relative max-w-4xl mx-auto mb-20 px-12">
  
  <button onclick="shiftSlide(-1)" class="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-bg-elev border border-line hover:border-rit-orange text-text flex items-center justify-center cursor-pointer transition-all z-10 font-bold" aria-label="Previous Topic">
    &#10094;
  </button>

  <div class="w-full overflow-hidden min-h-[260px] relative bg-bg-soft/40 border border-line rounded-2xl p-8 md:p-10">
    
    <div class="research-slide block transition-opacity duration-300">
      <span class="text-xs font-bold tracking-widest text-rit-orange uppercase">Topic 01 / Foundational Core</span>
      <h3 class="text-2xl font-extrabold text-text mt-3 mb-4">Privacy-Preserving & Personalized Federated Learning</h3>
      <p class="text-base text-text-dim leading-relaxed">
        Developing advanced decentralized optimization strategies and tailored client personalization mechanisms. Our frameworks actively resolve statistical data heterogeneity (Non-IID profiles) across distributed edge networks while ensuring strict user-level privacy guarantees.
      </p>
    </div>

    <div class="research-slide hidden transition-opacity duration-300">
      <span class="text-xs font-bold tracking-widest text-rit-orange uppercase">Topic 02 / System Integrity</span>
      <h3 class="text-2xl font-extrabold text-text mt-3 mb-4">Robustness & Security in Distributed ML</h3>
      <p class="text-base text-text-dim leading-relaxed">
        Investigating system-level vulnerabilities against adversarial corruption and manipulation. This work focuses on building robust model integrity evaluation metrics and deploying secure runtime monitoring architectures to guarantee trustworthy operations in untrusted environments.
      </p>
    </div>

    <div class="research-slide hidden transition-opacity duration-300">
      <span class="text-xs font-bold tracking-widest text-rit-orange uppercase">Topic 03 / Practical Deployment</span>
      <h3 class="text-2xl font-extrabold text-text mt-3 mb-4">Intelligent Cyber-Physical Systems (CPS)</h3>
      <p class="text-base text-text-dim leading-relaxed">
        Engineering and deploying lightweight, hardware-efficient neural network models directly to edge nodes. Applications focus on creating intelligent, automated security wrappers for physical infrastructure monitoring, critical asset protection, and remote environmental sensing.
      </p>
    </div>

  </div>

  <button onclick="shiftSlide(1)" class="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-bg-elev border border-line hover:border-rit-orange text-text flex items-center justify-center cursor-pointer transition-all z-10 font-bold" aria-label="Next Topic">
    &#10095;
  </button>
  
  <div class="flex justify-center gap-2 mt-4">
    <span class="slide-dot w-2 h-2 rounded-full bg-rit-orange transition-colors"></span>
    <span class="slide-dot w-2 h-2 rounded-full bg-line transition-colors"></span>
    <span class="slide-dot w-2 h-2 rounded-full bg-line transition-colors"></span>
  </div>
</div>

<div class="w-full my-12 border-t border-line"></div>

<div class="bg-bg-elev/40 border border-line p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-8">
  
  <div class="text-sm flex flex-col gap-2">
    <div class="font-bold text-xs uppercase tracking-wider text-rit-orange-text mb-1">Laboratory Location</div>
    <p class="text-text-dim text-base leading-relaxed">
      <strong>University of Texas Rio Grande Valley</strong><br />
      College of Engineering and Computer Science<br />
      Department of Computer Science — Office EIEAB 3.240
    </p>
  </div>

  <div class="text-sm flex flex-col gap-2">
    <div class="font-bold text-xs uppercase tracking-wider text-rit-orange-text mb-1">Contact Directory</div>
    <p class="text-text-dim text-base leading-relaxed">
      <strong>Lab Director:</strong> Dr. Sergei Chuprov (Assistant Professor)<br />
      <strong>Email:</strong> <a href="mailto:sergei.chuprov@utrgv.edu" class="text-text hover:text-rit-orange transition-colors underline font-medium">sergei.chuprov@utrgv.edu</a><br />
      <strong>Phone:</strong> 956-665-3305
    </p>
  </div>

</div>

<script is:inline>
  let currentIndex = 0;
  
  window.shiftSlide = (direction) => {
    const slides = document.querySelectorAll('.research-slide');
    const dots = document.querySelectorAll('.slide-dot');
    if (!slides.length) return;

    // Fade out current active index view
    slides[currentIndex].classList.add('hidden');
    dots[currentIndex].classList.remove('bg-rit-orange');
    dots[currentIndex].classList.add('bg-line');

    // Run circular index calculation arithmetic
    currentIndex = (currentIndex + direction + slides.length) % slides.length;

    // Render next view update target
    slides[currentIndex].classList.remove('hidden');
    dots[currentIndex].classList.remove('bg-line');
    dots[currentIndex].classList.add('bg-rit-orange');
  };
</script>
