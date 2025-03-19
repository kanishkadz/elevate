import React from 'react'
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
    return (
        <header>
            <nav>
                <Link href='/'>
                    <Image src='/logo.png' />
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