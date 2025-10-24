'use client';

import Link from 'next/link';
import css from './page.module.css';
import { NOTE_TAGS } from '../../../../constants';
import { useParams } from 'next/navigation';
import clsx from 'clsx';


const SidebarNotes = () => {
    const { slug } = useParams<{ slug: string[] }>();
    const tag = slug?.[0];

    return (
        <ul className={css.menuList}>
            <li className={css.menuItem}>
                <Link href={`/notes/filter/all`} className={clsx(css.menuLink, tag === 'all' && css.menuLinkActive)}>All notes</Link>
            </li>
            {NOTE_TAGS.map(noteTag => (
                <li className={css.menuItem} key={noteTag}>
                    <Link href={`/notes/filter/${noteTag}`} className={clsx(css.menuLink, tag === noteTag && css.menuLinkActive)}>{noteTag}</Link>
                </li>
            ))}
        </ul>
    )
}

export default SidebarNotes;