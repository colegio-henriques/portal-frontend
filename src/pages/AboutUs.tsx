
import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface">
      <main>
        
{/*  TopNavBar  */}
<nav className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline docked full-width top-0 sticky z-50 flat no shadows">
<div className="max-w-container-max-width mx-auto flex justify-between items-center px-margin-desktop py-4">
<div className="font-display-lg text-headline-md font-bold text-primary dark:text-inverse-primary">
                Colégio Henriques
            </div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-on-surface-variant dark:text-surface-variant font-medium font-label-md text-label-md hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="#">Home</a>
<a className="text-primary dark:text-inverse-primary border-b-2 border-primary font-semibold pb-1 font-label-md text-label-md" href="#">About</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium font-label-md text-label-md hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="#">Academic Levels</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium font-label-md text-label-md hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="#">Admissions</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium font-label-md text-label-md hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-2">
<span className="material-symbols-outlined text-primary">language</span>
<span className="material-symbols-outlined text-primary">search</span>
</div>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all active:scale-95">
                    Student Portal
                </button>
</div>
</div>
</nav>
<main>
{/*  Hero Section  */}
<header className="relative h-[614px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center opacity-40" data-alt="A cinematic wide-angle photograph of the modern architectural facade of a premium educational institution. The building features clean lines, expansive glass windows reflecting a clear blue sky, and pristine white stone surfaces. The lighting is bright and airy, typical of a high-end light-mode corporate aesthetic, evoking a sense of stability, heritage, and academic excellence." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCS2vBOHlQRORUhuJw7W0Fv0o-RuGxGbBWfwoYW9DAC3m3i9mxKYwYfZvmzpD2PvrhLSX8UO57s-Vc-kJI8ceabWjtsjqL14pctTRleegkz4fmQHCpwZMLDSYTgM-tyYpegJhfMiaG0S1jxdtrPb0geTguEx_CSs6JQoWXRxW4U079IUEIk9OWU7D1-4_9d4PRFsas2u8tnuSEOjMbU-LHkVxinUQzlbfkd6IQ4coQOxL6vig2xzQG0')"></div>
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-container-max-width mx-auto px-margin-desktop w-full">
<span className="text-primary font-label-md text-label-md tracking-widest uppercase mb-4 block">Excelência em Educação</span>
<h1 className="font-display-lg text-display-lg text-primary max-w-2xl mb-6">Tradição que inspira o futuro.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Desde 1985, o Colégio Henriques dedica-se a formar cidadãos conscientes, críticos e preparados para os desafios de um mundo globalizado.</p>
</div>
</header>
{/*  Nossa História Section  */}
<section className="py-24 bg-white">
<div className="max-w-container-max-width mx-auto px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-8">Nossa História</h2>
<div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
<p>Fundado em 1985 por visionários da educação, o Colégio Henriques nasceu do desejo de criar um ambiente de aprendizagem que unisse o rigor acadêmico ao desenvolvimento humano integral.</p>
<p>Ao longo de quase quatro décadas, evoluímos de uma pequena escola comunitária para um centro de referência educacional, mantendo intactos os nossos princípios fundamentais de ética, respeito e curiosidade intelectual.</p>
<div className="flex items-center gap-4 py-4 border-l-4 border-secondary-fixed pl-6 bg-surface-container-low rounded-r-lg">
<span className="font-display-lg text-display-lg text-primary">39</span>
<span className="font-label-md text-label-md text-primary leading-tight">Anos de compromisso<br/>com o ensino de elite.</span>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-xl overflow-hidden shadow-sm aspect-[4/5]">
<img className="w-full h-full object-cover" data-alt="A vintage-toned black and white photograph of a classroom from 1985, showing a teacher engaged with students around a wooden desk. The image is crisp and professional, presented as a historical artifact. It is framed with a clean white border and sits elegantly within the modern UI, providing a contrast between past heritage and current sophistication." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAv-4F-f1DNsNn_XFtf9iBsTtZrepAT63d_rvLVDkZx5SMJkHQgKu1MOqns9-Fm5oe1Wa2WxF12NxmewjFX3Yad0Knii1aFnx0ztYbQC61RZolyIo4ofwZXEtTa5KfRylMfZmQlUDFgGcDf52ZbeONFpnZ5xQmc91e2h-fDKxXvNle1nVJbZsBVme-78VGWUUGxYSW2-04R2d2VETPdAFOioO_6h419gb4kFyrmxUUTzjkyAkJWCbZ"/>
</div>
<div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-xl overflow-hidden border-8 border-white shadow-lg hidden md:block">
<img className="w-full h-full object-cover" data-alt="A modern close-up detail of the school's contemporary architecture, showing the intersection of glass and steel under soft morning light. The image captures the texture of the building and symbolizes the growth and modernization of the institution since its founding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAAFG9LnKaRR6lm5QSHY64styTsj_juEC_9IX632WYv9bjaJmziOevGMTE-ucuVu7T9wgQ2ooh2HDVYfYPmtvtFrQvLT25zzlO95uqbUr72pdbZB4g9lTxmP5crO1vJYkMkEadP5z7O5S8AR_N-hGgDUry6R1y918OVCHD0ZUL5lFn366_pHji-Qz1wNFw8M2-ZURM9SvKGZFFwd8quREoAXKvn2NcPAU6ip-TtfFf6D_55CpLAeQt"/>
</div>
</div>
</div>
</div>
</section>
{/*  Missão, Visão e Valores (Bento Grid)  */}
<section className="py-24 bg-surface-container-lowest">
<div className="max-w-container-max-width mx-auto px-margin-desktop">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-primary">Identidade Institucional</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">O que nos move e onde pretendemos chegar.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Missão  */}
<div className="bento-card p-8 bg-white border border-outline-variant rounded-xl flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary">target</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Missão</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Promover uma educação de excelência que potencialize as capacidades individuais, preparando estudantes para atuar com autonomia e responsabilidade na sociedade.</p>
</div>
{/*  Visão  */}
<div className="bento-card p-8 bg-primary text-on-primary rounded-xl flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-on-primary-fixed flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-secondary-fixed">visibility</span>
</div>
<h3 className="font-headline-md text-headline-md text-white mb-4">Visão</h3>
<p className="font-body-md text-body-md text-on-primary-container">Ser reconhecido como o colégio líder em inovação pedagógica e formação de lideranças éticas em todo o território nacional até 2030.</p>
</div>
{/*  Valores (Asymmetric height)  */}
<div className="bento-card p-8 bg-secondary-container border border-outline-variant rounded-xl flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-on-secondary-fixed flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-secondary-fixed-dim">verified_user</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-secondary-fixed mb-4">Valores</h3>
<ul className="space-y-3 font-body-md text-body-md text-on-secondary-fixed-variant">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Integridade e Ética</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Rigor Científico</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Respeito à Diversidade</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Inovação Constante</li>
</ul>
</div>
</div>
</div>
</section>
{/*  Mensagem da Direção  */}
<section className="py-24 bg-white">
<div className="max-w-container-max-width mx-auto px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
<div className="lg:col-span-2">
<div className="sticky top-32">
<div className="rounded-xl overflow-hidden aspect-square shadow-xl mb-6">
<img className="w-full h-full object-cover" data-alt="A professional portrait of the school's Director, a distinguished individual in business-casual attire, standing within a modern, sunlit office environment. The background shows blurred bookshelves and academic awards, conveying authority, approachability, and deep expertise in educational leadership. High-key lighting emphasizes clarity and professionalism." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8X-9A27KS9AQuYgV0sdusgoy1D_46TklOkOeyOCHoZK7DHqNp_tMX2Vp2Tx_NTSCRdZe90SPjpkyMN1RE8UPYrCMYvo_T3R8gydd-e7m_9S494eWHLW0FgpN7-GdVYxNft7G21SVpW6WO5A6Qu2jPSPwKgUAH-2NLIcByvZX9AI4w2FsdzTaYO_GUtC2l99VmlHPNSAMAvgYt4JyH0Onp3sD3hGVYrZRAt3LYzbDDHBIv6Wyhz-UM"/>
</div>
<h4 className="font-headline-md text-headline-md text-primary">Dr. Henrique Silva</h4>
<p className="font-label-md text-label-md text-on-surface-variant">Diretor Geral &amp; Fundador</p>
</div>
</div>
<div className="lg:col-span-3">
<span className="material-symbols-outlined text-primary text-6xl opacity-20 block mb-4">format_quote</span>
<h2 className="font-headline-lg text-headline-lg text-primary mb-8">Mensagem da Direção</h2>
<div className="font-body-lg text-body-lg text-on-surface-variant space-y-6 italic leading-relaxed">
<p>"Educar não é apenas transmitir conhecimento, mas despertar em cada aluno a vontade de aprender e a capacidade de transformar a sua realidade. No Colégio Henriques, acreditamos que cada criança e jovem carrega um potencial infinito."</p>
<p>"Nossa infraestrutura, nosso corpo docente e nossa metodologia são apenas ferramentas. O coração do nosso colégio está na relação humana, no acolhimento e na construção de um percurso acadêmico sólido que prepara não apenas para exames, mas para a vida."</p>
<p>"Sejam bem-vindos a uma instituição onde a excelência é o nosso ponto de partida, e o seu sucesso é o nosso maior objetivo."</p>
</div>
<div className="mt-12 flex items-center gap-4">
<div className="h-px bg-outline-variant flex-grow"></div>
<span className="font-label-md text-label-md text-primary uppercase tracking-widest">Compromisso com o Futuro</span>
</div>
</div>
</div>
</div>
</section>
{/*  Infrastructure Gallery (Clean Pattern)  */}
<section className="py-24 bg-background">
<div className="max-w-container-max-width mx-auto px-margin-desktop">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">Nossa Infraestrutura</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Espaços projetados para o máximo aproveitamento pedagógico.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-primary font-label-md text-label-md hover:underline decoration-2 underline-offset-4">
                        Ver Campus Completo <span className="material-symbols-outlined">arrow_right_alt</span>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="An expansive view of a modern, high-tech science laboratory within the school. It features clean white surfaces, state-of-the-art equipment, and students working in pairs. The lighting is clinical yet inviting, emphasizing the school's focus on research and scientific rigor. The overall aesthetic is professional and modern." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA74u6ajh64z7Wtavq7FbDKHy_alLzxcYq-qGH8vkDBY8brOcFnjKkwfsxCUFKW5e4R5Z9UwXq6w1tPAkTXW6i84mBeQJ7TzcmCU-YHyt7dd9opN-uymHggqq33w7qUS1stzTBmeAcO7P8eIbT7QQXgiUIEZwT7Z_LFsbUNGkHvdmxHgOr8yB5cotHYybRghEAjRChvHJFCIm-l6GkA2QTaCxEP2IEdh0rGEmjxIZBZHOakec2ZqPO7"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-4 left-4 text-white font-label-md text-label-md bg-primary/60 px-3 py-1 rounded backdrop-blur-sm">Laboratórios de Ponta</div>
</div>
<div className="rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A warm and inviting school library with floor-to-ceiling bookshelves, comfortable seating areas, and soft ambient lighting. Large windows let in natural light, creating a serene environment for reading and study. The color palette includes rich wood tones and the primary navy blue of the brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkE9PaiQHi5earI8XXoIVYqF0zgWeIcP8be7XeSYk8M82-NCAEw_gV6fvunr5-n5oKsmC0pH8UCWsu6C2BcBIhMHFYKLUUeDtBk-cBSd0-OS0y6YagI8KfDO9glptqT-tMV4syiuE3hMfmYv7v-R9zFJk816NopB1-1cSY-u1EjsMZNF0JZ6iN8yawaK3mCwOAhGAw2t-ELr6IYo1nBS1G5q1YlnJJaB9o_Aq9Ss03srffJJ2MpbZI"/>
<div className="absolute bottom-4 left-4 text-white font-label-md text-label-md bg-primary/60 px-3 py-1 rounded backdrop-blur-sm">Biblioteca Central</div>
</div>
<div className="rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A professional-grade indoor sports complex or gymnasium with polished wooden floors and bright lighting. The space is clean, organized, and reflects the institution's commitment to physical well-being and sportsmanship. High-end athletic equipment is visible in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_yRXEWHGOkj_F3ok52ySNJMc_Mk9QDiUU99IbMI5U6EpzBGohtN636Aj28gUp1sQ3VaIBXKek9t2n_hpSSPvpWcnyTnaK9PxLFPCVRKDXpfVT2n4yPzSqkAkQleSHAl1W3wc9iCdcmZvwiIa2qsnwebaAenlRUZgZQBA8KR9JVCbJ5M3cMo0_fitwSO-ND7jWdzBL31nPuWFAYW2nmdTQGvG9flf-4vVnzqUQ5bWGWR343rWR9wX"/>
<div className="absolute bottom-4 left-4 text-white font-label-md text-label-md bg-primary/60 px-3 py-1 rounded backdrop-blur-sm">Complexo Desportivo</div>
</div>
<div className="col-span-2 rounded-xl overflow-hidden h-48 relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="An outdoor recreational area or green campus space with modern seating, landscaped gardens, and students interacting. The lighting is golden hour sunlight, giving a warm and friendly feel to the academic environment. It highlights the school as a community hub." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDszZ_taDOomzEze4ZXX9KFFdu_B3LbwVIhlRNINgWbgeMibAVjSNqJOY5QIemM7zh0jBVy8nnW17FtYFjW9t1TIxfythruSpqbqvg5clYXU5iW0VoBFDEtoZxz5AsPKMPnDJszajpLvCQCyzlDsYhfs4neKTguG5mHgfjD1RES9dG1fSS8mPxbUzE_zUtc55UQ5xfhdGlRgO6imN7YCuGGY_ZZ6nMVMVtPn-fZxAhxgfDYNssO7c-"/>
<div className="absolute bottom-4 left-4 text-white font-label-md text-label-md bg-primary/60 px-3 py-1 rounded backdrop-blur-sm">Áreas Verdes</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-primary dark:bg-on-primary-fixed full-width">
<div className="w-full py-16 px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max-width mx-auto">
<div className="col-span-1 md:col-span-1">
<div className="font-display-lg text-headline-md text-on-primary dark:text-inverse-primary mb-6">
                    Colégio Henriques
                </div>
<p className="font-body-md text-body-md text-on-primary-container opacity-80">
                    Educação de excelência para um mundo em constante evolução.
                </p>
<div className="flex gap-4 mt-8">
<span className="material-symbols-outlined text-on-primary cursor-pointer hover:text-secondary-fixed transition-colors">face_nod</span>
<span className="material-symbols-outlined text-on-primary cursor-pointer hover:text-secondary-fixed transition-colors">public</span>
<span className="material-symbols-outlined text-on-primary cursor-pointer hover:text-secondary-fixed transition-colors">mail</span>
</div>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-on-primary font-label-md text-label-md uppercase tracking-wider mb-2">Institutional</h5>
<a className="font-label-md text-label-md text-on-primary-container dark:text-surface-variant hover:text-secondary-fixed transition-colors duration-200" href="#">Institutional Privacy</a>
<a className="font-label-md text-label-md text-on-primary-container dark:text-surface-variant hover:text-secondary-fixed transition-colors duration-200" href="#">Term of Use</a>
<a className="font-label-md text-label-md text-on-primary-container dark:text-surface-variant hover:text-secondary-fixed transition-colors duration-200" href="#">Work with Us</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-on-primary font-label-md text-label-md uppercase tracking-wider mb-2">Campus</h5>
<a className="font-label-md text-label-md text-on-primary-container dark:text-surface-variant hover:text-secondary-fixed transition-colors duration-200" href="#">Campus Map</a>
<a className="font-label-md text-label-md text-on-primary-container dark:text-surface-variant hover:text-secondary-fixed transition-colors duration-200" href="#">Accessibility</a>
<a className="font-label-md text-label-md text-on-primary-container dark:text-surface-variant hover:text-secondary-fixed transition-colors duration-200" href="#">Gallery</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-on-primary font-label-md text-label-md uppercase tracking-wider mb-2">Contact</h5>
<p className="font-label-md text-label-md text-on-primary-container">Rua das Letras, 1985<br/>Lisboa, Portugal</p>
<p className="font-label-md text-label-md text-on-primary-container">+351 210 000 000</p>
<p className="font-label-md text-label-md text-on-primary-container">geral@henriques.pt</p>
</div>
</div>
<div className="max-w-container-max-width mx-auto px-margin-desktop py-8 border-t border-on-primary-container/20">
<p className="font-label-md text-label-md text-on-primary-container opacity-60 text-center md:text-left">
                © 2024 Colégio Henriques. All rights reserved. Providing excellence in education since 1985.
            </p>
</div>
</footer>


      </main>
    </div>
  );
}
