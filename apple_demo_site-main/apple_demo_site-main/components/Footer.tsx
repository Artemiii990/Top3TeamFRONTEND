import s from './Footer.module.css';

const COLUMNS: { heading: string; links: string[] }[] = [
  {
    heading: 'Shop & Learn',
    links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch'],
  },
  {
    heading: 'Services',
    links: ['Apple Music', 'Apple TV+', 'Apple Fitness+', 'iCloud+'],
  },
  {
    heading: 'Account',
    links: ['Manage Apple ID', 'Apple Wallet', 'iCloud.com'],
  },
  {
    heading: 'Apple Store',
    links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Trade In'],
  },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.links}>
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <h6>{col.heading}</h6>
            {col.links.map((label) => (
              <a key={label} href="#">
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className={s.copyright}>
        Copyright © 2026 Apple Inc. All rights reserved.&nbsp;·&nbsp; Privacy
        Policy &nbsp;·&nbsp; Terms of Use &nbsp;·&nbsp; Sales and Refunds
        &nbsp;·&nbsp; Legal
      </div>
    </footer>
  );
}
