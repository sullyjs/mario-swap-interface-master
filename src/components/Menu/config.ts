import { MenuEntry } from '@marioswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://nostalgic-montalcini-6ca1b0.netlify.app/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://nostalgic-montalcini-6ca1b0.netlify.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://nostalgic-montalcini-6ca1b0.netlify.app/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://nostalgic-montalcini-6ca1b0.netlify.app/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://nostalgic-montalcini-6ca1b0.netlify.app/nft',
  },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://nostalgic-montalcini-6ca1b0.netlify.app/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://nostalgic-montalcini-6ca1b0.netlify.app/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://nostalgic-montalcini-6ca1b0.netlify.app/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://marioswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://marioswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://marioswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://marioswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://nostalgic-montalcini-6ca1b0.netlify.app/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.marioswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/marioswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.marioswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://marioswap.medium.com',
      },
    ],
  },
]

export default config
