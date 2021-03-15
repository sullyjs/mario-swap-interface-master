import { MenuEntry } from '@marioswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://localhost:3001/',
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
    href: 'http://localhost:3001/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://localhost:3001/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'http://localhost:3001/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'http://localhost:3001/nft',
  },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'http://localhost:3001/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'http://localhost:3001/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'http://localhost:3001/profile',
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
    href: 'http://localhost:3001/ifo',
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
