'use client'
import { useEffect } from 'react';
import { Dashboard } from './_components/dashboard'
import { useRouter } from 'next/navigation';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

const Page = () => {
  const { data: user, isLoading } = useRetrieveUserQuery();

  const router = useRouter();

  useEffect(() => {
    if (!user?.role || !user.address) {
      router.push('/onboard');
    }
  }, [user, router]);

  return (
    <Dashboard />
  )
}

export default Page