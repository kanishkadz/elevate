import React from 'react'
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/">
                    <Image src="/logo.png" alt="Elevate Logo" width={200} height={60} 
                        className="h-12 py-1 w-auto object-contain"
                    />
                </Link>
            </nav>


            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    )
}

export default Header