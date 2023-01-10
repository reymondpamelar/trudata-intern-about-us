import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import DashboardLayout from "../layouts/dashboard";
import Hero from "../containers/dashboard/hero";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <DashboardLayout>
                <Hero/>
            </DashboardLayout>
        </div>
    )
}
