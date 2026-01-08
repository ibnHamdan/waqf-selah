import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {


    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-bg-dark">
                {/* Background Decorations */}
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Islamic Architecture Pattern"
                        className="w-full h-full object-cover opacity-5 dark:opacity-10"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeEorvd4jVESh_JdX9MZbGmNhmjLvZ5Choj3eTWk6_RYGr8KgR0Kotn4vQtHXKFvp22qCy3vmTeBmK1BXV4J2cOOfWI88igH-gyRhCnYCDG_g8h6Rry2pAnv3zj5fwxDK8Ro0MWSacJnGyj0SCkwOOwUNKGIFdiaHtOksGkaPdZb5kssQCXsZYXDHgN6PcChTR4st_SIP4nwZ7ZrbcUPq7znEd4MpUcDgZFFBFMynBn24UiO3dV5Twt19zRX2LbSGdzp6Mr7JjYx4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-bg-dark dark:via-bg-dark/90 dark:to-bg-dark/40"></div>
                </div>

                {/* Subtle Islamic Texture */}
                <div className="absolute inset-0 z-0 opacity-[0.03] bg-islamic-pattern pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* Content Side */}
                        <div className="text-right space-y-8 order-2 lg:order-1">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-extrabold text-sm animate-pulse">
                                <span className="ml-2 w-2.5 h-2.5 rounded-full bg-secondary"></span>
                                مرخص من الهيئة العامة للأوقاف
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                                    <span className="block text-primary">وقف البر والصلة</span>
                                </h1>
                                <h2 className="text-2xl lg:text-4xl font-bold text-secondary">
                                    إحسان يتجدد... <span className="text-slate-600 dark:text-slate-400 font-medium italic">أثر لا ينقطع</span>
                                </h2>
                            </div>

                            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">
                                وقف خيري يهدف لتعزيز التكافل الاجتماعي في المملكة العربية السعودية، عبر مشاريع مستدامة تخدم المجتمع وتنمي أواصر القربى والرحمة.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-primary hover:bg-teal-700 shadow-xl shadow-teal-500/30 transform hover:-translate-y-1 transition duration-300"
                                >
                                    <span>اكتشف برامجنا</span>
                                    <svg className="h-6 w-6 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                                    </svg>
                                </Link>
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-lg font-bold rounded-2xl text-slate-700 dark:text-white bg-white/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm backdrop-blur-sm transition duration-300"
                                >
                                    تواصل معنا
                                </Link>
                            </div>

                            {/* Stats Row */}
                            <div className="pt-8 flex items-center gap-12 border-t border-slate-200 dark:border-slate-800">
                                <div className="group">
                                    <p className="text-4xl font-black text-primary transition-transform group-hover:scale-110">+50</p>
                                    <p className="text-base text-slate-500 dark:text-slate-400 font-bold">مشروع خيري</p>
                                </div>
                                <div className="w-px h-12 bg-slate-300 dark:bg-slate-700"></div>
                                <div className="group">
                                    <p className="text-4xl font-black text-secondary transition-transform group-hover:scale-110">+10K</p>
                                    <p className="text-base text-slate-500 dark:text-slate-400 font-bold">مستفيد سنوياً</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Side */}
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl z-0"></div>

                            <div className="relative z-10 p-4 lg:p-8">
                                {/* Hero Artwork Box as per the screenshot */}
                                <div className="bg-white p-12 lg:p-20 rounded-[40px] shadow-2xl shadow-slate-200 dark:shadow-none animate-float relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>

                                    <img
                                        alt="Hero Illustration"
                                        className="w-full max-w-sm mx-auto transition-transform duration-700 hover:scale-110"
                                        src="/waqf-selah/1.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="fill-current text-slate-100 dark:text-slate-900 w-full h-12 lg:h-24" preserveAspectRatio="none" viewBox="0 0 1440 320">
                        <path d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Additional Simple Section to demonstrate routing scroll */}
            <section className="py-24 bg-slate-100 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-primary">رؤيتنا وقيمنا</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'الشفافية', desc: 'نعمل بوضوح تام في كافة معاملاتنا المالية والإدارية' },
                            { title: 'الاستدامة', desc: 'نهدف لبناء مشاريع وقفية تدوم لأجيال قادمة' },
                            { title: 'الأثر الملموس', desc: 'نركز على النتائج التي تغير حياة المستفيدين للأفضل' }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-bold mb-4 text-secondary">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
