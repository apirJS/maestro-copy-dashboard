'use client';

import type { IconType } from 'react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { GrTransaction } from 'react-icons/gr';
import { CiBoxes } from 'react-icons/ci';
import { VscTools } from 'react-icons/vsc';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

type Menus = {
  name: string;
  link: string;
  Icon: IconType;
};

export default function Sidebar() {
  const pathName = usePathname();
  const menus: Menus[] = [
    { name: 'Dashboard', link: '/', Icon: FiHome },
    { name: 'Transaksi', link: '/transaksi', Icon: GrTransaction },
    { name: 'Barang', link: '/barang', Icon: CiBoxes },
    { name: 'Perangkat', link: '/perangkat', Icon: VscTools },
    { name: 'Pengeluaran', link: '/pengeluaran', Icon: FaMoneyBillTrendUp },
  ];

  return (
    <aside className='h-full bg-primary flex items-center flex-col py-8 px-4 gap-y-8'>
      <Image
        src='/comp_logo.png'
        alt='company logo'
        width={150}
        height={75}
        loading='eager'
      />
      <ul className='flex flex-col gap-y-3 font-semibold lg:text-lg'>
        {menus.map((menu) => {
          return (
            <li
              key={menu.link}
              className={pathName !== menu.link ? 'opacity-50' : ''}
            >
              <Link
                href={menu.link}
                target='_self'
                className='flex items-center gap-x-2'
              >
                <menu.Icon />
                <span>{menu.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
