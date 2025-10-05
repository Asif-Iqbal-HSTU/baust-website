import React from "react";
import {
    Laptop,
    PlugZap,
    Network,
    Cog,
    Factory,
    Ruler,
    Briefcase,
    Calculator,
    GraduationCap,
    BookOpen,
    FlaskConical,
} from "lucide-react";
import { Link } from "@inertiajs/react";

export default function Academics() {
    const iconSize = 18;
    const iconClass = "text-green-600 shrink-0"; // ensures equal alignment and prevents wrapping issues
    const iconClass2 = "text-green-300 shrink-0"; // ensures equal alignment and prevents wrapping issues

    return (
        <section className="py-16 bg-[#fafafa] mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-00">
                Our Academics
            </h2>

            <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-30 mt-10 md:mt-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* FECE */}
                    <div className="max-w-sm bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700">
                        <img
                            className="rounded-t-2xl w-full h-50 object-cover "
                            src="/images/campus.jpeg"
                            alt="Faculty of Electrical and Computer Engineering"
                        />
                        <div className="p-6 pb-8">
                            <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                Faculty of Electrical and Computer Engineering (FECE)
                            </h5>

                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start space-x-2">
                                    <Laptop size={iconSize} className={`${iconClass} relative top-[2px]`} />
                                    <Link href="/departments/cse" className="hover:text-green-700 hover:underline leading-snug">
                                        Computer Science and Engineering (CSE)
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <PlugZap size={iconSize} className={`${iconClass} relative top-[2px]`} />
                                    <Link href="/departments/eee" className="hover:text-green-700 hover:underline leading-snug">
                                        Electrical and Electronic Engineering (EEE)
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Network size={iconSize} className={`${iconClass} relative top-[2px]`} />
                                    <Link href="/departments/ict" className="hover:text-green-700 hover:underline leading-snug">
                                        Information and Communication Technology (ICT)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* FME */}
                    <div className="max-w-sm bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-2xl w-full h-50 object-cover" src="/images/campus.jpeg" alt="Faculty of Mechanical Engineering" />
                        <div className="p-5">
                            <h5 className="mb-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                Faculty of Mechanical Engineering (FME)
                            </h5>

                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start space-x-2">
                                    <Cog size={iconSize} className={`${iconClass} relative top-[2px]`} />
                                    <Link href="/departments/me" className="hover:text-green-700 hover:underline leading-snug">
                                        Department of Mechanical Engineering (ME)
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Factory size={iconSize} className={`${iconClass} relative top-[2px]`} />
                                    <Link href="/departments/ipe" className="hover:text-green-700 hover:underline leading-snug">
                                        Department of Industrial and Production Engineering (IPE)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* FCE */}
                    <div className="max-w-sm bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-2xl w-full h-50 object-cover" src="/images/campus.jpeg" alt="Faculty of Civil Engineering" />
                        <div className="p-5">
                            <h5 className="mb-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                Faculty of Civil Engineering (FCE)
                            </h5>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start space-x-2">
                                    <Ruler size={iconSize} className={`${iconClass} relative top-[2px]`} />
                                    <Link href="/departments/ce" className="hover:text-green-700 hover:underline leading-snug">
                                        Department of Civil Engineering (CE)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* FBS */}
                    <div className="max-w-sm bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-2xl w-full h-50 object-cover" src="/images/campus.jpeg" alt="Faculty of Business Studies" />
                        <div className="p-5">
                            <h5 className="mb-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                Faculty of Business Studies (FBS)
                            </h5>

                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start space-x-2">
                                    <Briefcase size={iconSize} className={`${iconClass} relative top-[2px]`} />
                                    <Link href="/departments/dba" className="hover:text-green-700 hover:underline leading-snug">
                                        Department of Business Administration (DBA)
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Calculator size={iconSize} className={`${iconClass} relative top-[2px]`} />
                                    <Link href="/departments/ais" className="hover:text-green-700 hover:underline leading-snug">
                                        Department of Accounting and Information Systems (AIS)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* FSH */}
                    <div className="max-w-sm bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-2xl w-full h-50 object-cover" src="/images/campus.jpeg" alt="Faculty of Science and Humanities" />
                        <div className="p-5">
                            <h5 className="mb-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                Faculty of Science and Humanities (FSH)
                            </h5>

                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start space-x-2">
                                    <BookOpen size={iconSize} className={`${iconClass} relative top-[2px]`} />
                                    <Link href="/departments/english" className="hover:text-green-700 hover:underline leading-snug">
                                        Department of English
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <FlaskConical size={iconSize} className={`${iconClass} relative top-[2px]`} />
                                    <Link href="/departments/arts-science" className="hover:text-green-700 hover:underline leading-snug">
                                        Department of Arts and Sciences (Physics, Chemistry, Math, Sociology, Bangla)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Programs We Offer */}
                    <div
                        className="relative max-w-sm rounded-2xl shadow-md overflow-hidden group"
                        style={{
                            backgroundImage: "url('/images/campus.jpeg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Overlay for readability */}
                        <div className="absolute inset-0 bg-black/80 group-hover:bg-black/90 transition-all duration-300"></div>

                        {/* Content over background */}
                        <div className="relative p-5 text-white">
                            <h5 className="mb-3 text-2xl font-semibold tracking-tight text-white drop-shadow-md">
                                Programs We Offer
                            </h5>

                            <ul className="space-y-2 text-gray-100">
                                <li className="flex items-start space-x-2">
                                    <Laptop size={iconSize} className={`${iconClass2} relative top-[2px]`} />
                                    <Link href="/departments/cse" className="hover:text-green-300 hover:underline leading-snug">
                                        B.Sc. Engg. in CSE
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <PlugZap size={iconSize} className={`${iconClass2} relative top-[2px]`} />
                                    <Link href="/departments/eee" className="hover:text-green-300 hover:underline leading-snug">
                                        B.Sc. Engg. in EEE
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Network size={iconSize} className={`${iconClass2} relative top-[2px]`} />
                                    <Link href="/departments/ict" className="hover:text-green-300 hover:underline leading-snug">
                                        B.Sc. Engg. in ICT
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Cog size={iconSize} className={`${iconClass2} relative top-[2px]`} />
                                    <Link href="/departments/me" className="hover:text-green-300 hover:underline leading-snug">
                                        B.Sc. Engg. in ME
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Factory size={iconSize} className={`${iconClass2} relative top-[2px]`} />
                                    <Link href="/departments/ipe" className="hover:text-green-300 hover:underline leading-snug">
                                        B.Sc. Engg. in IPE
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Ruler size={iconSize} className={`${iconClass2} relative top-[2px]`} />
                                    <Link href="/departments/ce" className="hover:text-green-300 hover:underline leading-snug">
                                        B.Sc. Engg. in CE
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <BookOpen size={iconSize} className={`${iconClass2} relative top-[2px]`} />
                                    <Link href="/departments/english" className="hover:text-green-300 hover:underline leading-snug">
                                        BA (Hons) in English
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Briefcase size={iconSize} className={`${iconClass2} relative top-[2px]`} />
                                    <Link href="/departments/bba" className="hover:text-green-300 hover:underline leading-snug">
                                        BBA
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Calculator size={iconSize} className={`${iconClass2} relative top-[2px]`} />
                                    <Link href="/departments/ais" className="hover:text-green-300 hover:underline leading-snug">
                                        BBA in AIS
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <GraduationCap size={iconSize} className={`${iconClass2} relative top-[2px]`} />
                                    <Link href="/departments/mba" className="hover:text-green-300 hover:underline leading-snug">
                                        MBA
                                    </Link>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <FlaskConical size={iconSize} className={`${iconClass2} relative top-[2px]`} />
                                    <Link href="/departments/ma-english" className="hover:text-green-300 hover:underline leading-snug">
                                        MA in English (ELT)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
