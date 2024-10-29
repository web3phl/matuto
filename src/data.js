// Credits to blocknative for some of the glossary definitions
// We create some of the definition and modify some definition from blocknative
// https://www.blocknative.com/glossary
const glossary = [
    {
      "term": "Interoperability",
      "definition": "Interoperability refers to the ability of different blockchain networks to interact, share, and access each other's data and assets seamlessly, which is crucial for enhancing user experience and advancing blockchain ecosystems."
    },
    {
      "term": "Layer 2",
      "definition": "Layer 2 is a secondary framework built on top of an existing blockchain (Layer 1) to improve scalability and speed by offloading some of the processing work from the main chain."
    },
    {
      "term": "Nonce",
      "definition": "A nonce is a number added to a hashed or encrypted block in a blockchain that, when rehashed, meets the difficulty level restrictions. Nonces are used to create the proof of work that helps secure blockchains."
    },
    {
      "term": "Rug Pull",
      "definition": "A rug pull is a type of scam in the cryptocurrency space where developers abandon a project and take investors' funds. This often happens in DeFi projects and new token launches."
    },
    {
      "term": "Sharding",
      "definition": "Sharding is a method of partitioning a blockchain network into smaller, more manageable pieces, or 'shards,' to improve scalability by enabling parallel processing of transactions."
    },
    {
      "term": "Stablecoin",
      "definition": "A stablecoin is a type of cryptocurrency that is pegged to a stable asset, like a fiat currency or precious metal, to minimize price volatility and facilitate smoother transactions."
    },
    {
      "term": "Validator",
      "definition": "A validator is an entity that validates transactions and adds them to the blockchain in a proof-of-stake (PoS) network. Validators replace miners in PoS blockchains and are rewarded for securing the network."
    },
    {
      "term": "Yield Farming",
      "definition": "Yield farming is a strategy in DeFi where users lend or stake their assets in order to generate high returns, typically by earning additional tokens as interest or rewards."
    },
    {
      "term": "zk-SNARKs",
      "definition": "Zero-Knowledge Succinct Non-Interactive Argument of Knowledge (zk-SNARK) is a cryptographic proof that enables one party to prove possession of certain information without revealing the information itself."
    },
    {
      "term": "Proof of Burn",
      "definition": "Proof of Burn (PoB) is a consensus algorithm where miners 'burn' coins by sending them to an unusable address, proving commitment to the network and receiving rewards without the environmental impact of Proof of Work."
    },  
  {
    term: 'ABI (Application Binary Interface)',
    definition:
      'An ABI, or Application Binary Interface, is a set of rules defining how to interact with certain software components. In the context of Ethereum, an ABI is like a blueprint that tells software how to interact with, or how to use, a specific smart contract on the blockchain. It defines the methods and structures of the smart contract so that other applications can use it correctly.',
  },
  {
    term: "API (Application Programming Interface)",
    definition: "API is an acronym for Application Programming Interface which is an interface between computers or programs that allows information to pass between them."
  },
  {
    term: 'Base Fee',
    definition:
      'The base fee is an algorithmically determined fee that users on the Ethereum blockchain must pay to complete a transaction. The base fee is designed to help smooth transaction fees and prevent sudden spikes by targeting 50% full blocks. Depending on how full the new block is, the Base Fee is automatically increased (the block is more than 50% full) or decreased (the block is less than 50% full).',
  },
  {
    term: 'Blockchain',
    definition:
      'A blockchain is a distributed database that is shared among the nodes of a computer network. Blockchains store a continuously growing historical ledger of information (e.g. accounts and transactions) into blocks.',
  },
  {
    term: 'DApp (Decentralized Application)',
    definition:
      'A decentralized application, is an application built on a decentralized blockchain network using smart contracts and Web 3.0 javascript libraries. Examples for Dapps include web3 wallets, interest-bearing cryptocurrency savings accounts, and NFT marketplaces.',
  },
  {
    term: 'DEX (Decentralized Exchange)',
    definition:
      'DEX is an abbreviation for Decentralized Exchange. This type of crypto exchange enables users to transact in a direct peer-to-peer manner without any intermediary.',
  },
  {
    term: 'Merkle Tree',
    definition:
      'A Merkle tree, or hash tree, is a data structure used by blockchains to securely validate and summarize large data sets.',
  },
  {
    term: 'Smart Contract',
    definition:
      "A smart contract is a piece of code that executes according to it's instructions exactly like a traditional contract between two people would be executed. Smart contracts are used by developers to build decentralized applications on blockchain networks like Ethereum to enable users to permissionlessly transact in a secure way.",
  },
  {
    term: 'Chainlink',
    definition:
      "Chainlink is a decentralized oracle network that provides real-world data to smart contracts on the blockchain. Oracles are services that send data to the blockchain, which can trigger smart contract executions when predefined conditions are met. However, since blockchains can't access data outside their network, they rely on oracle services like Chainlink to provide this data.",
  },
  {
    term: 'Cyptography',
    definition:
      'A method of securing data from unauthorized access. In the blockchain, cryptography is used to secure transactions taking place between two nodes in a blockchain network. It is used to encrypt messages.',
  },
  {
    term: 'DAO (Decentralized Autonomous Organization)',
    definition:
      "A DAO, or Decentralized Autonomous Organization, is like a virtual company or club that is run by rules encoded as computer programs called smart contracts. These rules are made and changed based on the votes of its members. The main point is that no single person is in charge, rather it's collectively run by its members, and everything happens automatically according to the programmed rules.",
  },
  {
    term: 'DeFi (Decentralized Finance)',
    definition:
      'Decentralized finance (DeFi) is a blockchain-based form of finance that does not rely on central financial intermediaries such as brokerages, exchanges, or banks to offer traditional financial instruments, and instead utilizes smart contracts on blockchains, the most common being Ethereum.',
  },
  {
    term: 'Tokenomics',
    definition:
      "A portmanteau of the words 'token' and 'economics,' tokenomics refers to all the aspects of a cryptocurrency that can impact the price such as total supply, vesting, and utility.",
  },
  {
    term: 'Gas',
    definition:
      'Gas is a unit of measurement that represents the computational effort required to complete a transaction. How much a user spends to complete a transaction is determined by the total amount of gas multiplied by the gas price.',
  },
  {
    term: 'EIP-1559',
    definition:
      "Also known as Ethereum Improvement Proposal 1559, EIP-1559 was part of Ethereum's London hard fork and it was deployed across the Ethereum network on August 5th, 2021. EIP-1559 introduced a Base Fee which is paid by users and is eventually burned (i.e. removed from circulation), and it replaced the current gas limit with two values: a “long-term average target” (equal to the current gas limit), and a “hard per-block cap” (twice the current gas limit).",
  },
  {
    term: 'ERC-1155 (Multi Token Standard)',
    definition:
      'ERC-1155 is a technical standard used for smart contracts on the Ethereum blockchain for implementing both fungible and non-fungible tokens (NFTs). ERC stands for Ethereum Request for Comment, and 1155 is the number that was assigned to this request.',
  },
  {
    term: 'Gas Price',
    definition:
      "The gas price is the amount of Ether (ETH) a user is willing to pay for every unit of gas required to complete a transaction (denominated in Gwei). Blocknative's gas estimator tool can help traders and developers optimize setting gas prices to probabilistically get transactions confirmed in the next block",
  },
  {
    term: 'Hashing',
    definition:
      'Hashing refers to the transformation and generation of input data of any length into a string of a fixed size, which is performed by a specific algorithm. In particular, the Bitcoin hash algorithm is SHA-256 or Secure Hashing Algorithm 256 bits.',
  },
  {
    term: 'Metamask',
    definition:
      'A browser extension wallet that enables users to securely store and manage digital assets on the decentralized web (Web3). It serves as a gateway to interact with blockchain networks, allowing users to connect their browsers to decentralized applications (dApps) and execute transactions. With its user-friendly interface, MetaMask facilitates seamless access to the world of cryptocurrencies, non-fungible tokens (NFTs), and decentralized finance (DeFi) applications.',
  },
  {
    term: 'ERC-20 (Token Standard)',
    definition:
      'ERC-20 is a technical standard used for smart contracts on the Ethereum blockchain for implementing tokens (fungible). ERC stands for Ethereum Request for Comment, and 20 is the number that was assigned to this request.',
  },
  {
    term: 'ERC-4337 (Account Abstraction)',
    definition:
      'ERC-4337 is an Ethereum standard that achieves account abstraction on the protocol without any consensus-layer changes. It makes it possible to transact and create contracts in a single contract account. ERC-4337 is a standard for Ethereum that aims to make user accounts work more like smart contracts, a phenomenon called "account abstraction."',
  },
  {
    term: 'ERC-4907 (Rental NFT)',
    definition:
      'ERC-4907 is a proposed Ethereum standard that extends ERC-721 to introduce "owner" and "user" roles. It streamlines NFT rentals with an automated "expires" function that enforces time-limited user roles, ending usage terms automatically without a second transaction.',
  },
  {
    term: 'ERC-6551 (Token Bound Accounts)',
    definition:
      'ERC-6551 is a token standard for non-fungible tokens (NFTs) that enhances the functionality and value of NFTs by giving them smart contract capabilities. It suggests creating a dedicated cryptocurrency wallet for each ERC-721 token, effectively transforming NFTs into Token Bound Accounts (TBAs). With smart contract capabilities, NFTs can now hold other assets, interact with smart contracts, and have their own on-chain identity.',
  },
  {
    term: 'ERC-721 (Non-fungible Token)',
    definition:
      'ERC-721 is a technical standard used for smart contracts on the Ethereum blockchain for implementing non-fungible tokens (NFTs). ERC stands for Ethereum Request for Comment, and 721 is the number that was assigned to this request.',
  },
  {
    term: 'Ethereum',
    definition:
      "A decentralized, open-source blockchain network that was launched in 2015 by its founder, Vitalik Buterin. Ethereum is the leading smart contract-enabled blockchain in the world, and it's native token, ETH, is the 2nd largest digital asset by marketcap. Blocknative's APIs support the Ethereum blockchain and the Ethereum Goerli testnet.",
  },
  {
    term: 'ENS (Ethereum Name Service)',
    definition:
      'The Ethereum Name Service (ENS) is a decentralized naming service that allows users to register human-readable domain names for their Ethereum addresses. ENS names can be used to send and receive transactions, interact with smart contracts, and resolve decentralized websites.',
  },
  {
    term: 'EVM (Ethereum Virtual Machine)',
    definition:
      "A software application that blockchain developers use to deploy decentralized applications (Dapp) on the Ethereum blockchain. The EVM interacts with Ethereum's accounts, smart contracts, and distributed ledger.",
  },
  {
    term: 'Gas',
    definition:
      'Gas is a unit of measurement that represents the computational effort required to complete a transaction. How much a user spends to complete a transaction is determined by the total amount of gas multiplied by the gas price.',
  },
  {
    term: 'Gas Fees',
    definition:
      "Gas fees are the fees users must pay in Ethereum's native currency, Ether (ETH), to complete a transaction. Gas fees are used to compensate miners for providing the computational work required to process and validate transactions.",
  },
  {
    term: 'Metamask',
    definition:
      'A browser extension wallet that enables users to securely store and manage digital assets on the decentralized web (Web3). It serves as a gateway to interact with blockchain networks, allowing users to connect their browsers to decentralized applications (dApps) and execute transactions. With its user-friendly interface, MetaMask facilitates seamless access to the world of cryptocurrencies, non-fungible tokens (NFTs), and decentralized finance (DeFi) applications.',
  },
  {
    term: 'Metaverse',
    definition:
      'A metaverse is an engaging digital universe, fueled by Web3 principles. It utilizes blockchain for decentralized, real-time interaction, enabling users to own digital assets, control their data, and enjoy a boundary-defying internet experience.',
  },
  {
    term: 'NFT (Non-Fungible Token)',
    definition:
      'A non-fungible token (NFT) is a unique digital asset that is stored on a blockchain. NFTs are used to represent real-world items like art, music, in-game items, and videos.',
  },
  {
    term: 'Sidechain',
    definition:
      'A side chain is a blockchain that allows tokens from one blockchain to be securely used within a completely separate blockchain, but still move back to the original chain if necessary. Sidechains like xDai are popular because they offer distinct advantages to developers including cost savings and greater transaction speed',
  },
  {
    term: 'Solidity',
    definition:
      'A high-level programming language used for writing smart contracts on the Ethereum blockchain. It offers a secure and robust framework for creating decentralized applications (dApps) and self-executing contracts with predefined rules. With a syntax resembling popular programming languages, Solidity allows developers to build sophisticated applications on the Ethereum network, leveraging features like inheritance, libraries, and complex data structures.',
  },
  {
    term: 'Testnet',
    definition:
      'A testnet (test network) is where developers can test protocol upgrades and smart contracts before deploying them on mainnet.',
  },
  {
    term: 'Web3',
    definition:
      'It is the current evolution of the internet characterized by decentralization and digital ownership, unlike Web 1.0 and Web 2.0 which were characterized by users being able to read (Web 1.0) and write (Web 2.0) content.',
  },
  {
    term: 'Zero-Knowledge Proof',
    definition:
      "A zero-knowledge proof is a special cryptographic method where one person can prove to another that they know a secret, but without sharing any details about the secret itself. It's often used in technologies and systems like blockchain to keep data private.",
  },
  {
    term: 'Hashing',
    definition:
      'Hashing refers to the transformation and generation of input data of any length into a string of a fixed size, which is performed by a specific algorithm. In particular, the Bitcoin hash algorithm is SHA-256 or Secure Hashing Algorithm 256 bits.',
  },
  {
    term: "Cross-Chain Communication",
    definition: "Cross-chain communication refers to the ability of different blockchain networks to exchange data and assets seamlessly. It enables interoperability between blockchains, allowing users and applications to interact with assets and smart contracts on multiple chains, enhancing the overall functionality and utility of decentralized ecosystems."
  },
  {
    term: "DEX (Decentralized Exchange)",
    definition: "DEX is an abbreviation for Decentralized Exchange. This type of crypto exchange enables users to transact in a direct peer-to-peer manner without any intermediary."
  },
  {
    term: "Liquidity",
    definition: "Liquidity is how quickly and easily an asset can be converted into cash or another asset."
  },
  {
    term: "Ether",
    definition: "Ether is the primary internal cryptographic token of the Ethereum network. Ether is used to pay transaction and computation fees for Ethereum transactions."
  },
  {
      term: "IDL (Interface Definition Language)",
      definition: "In Solana programming, an Interface Definition Language (IDL) specifies a program's public interface. It defines a Solana program's account structures, instructions, and error codes. IDLs are .json files used to generate client-side code, allowing users to easily interact with a Solana program."
  },
  {
      term: "SPL (Solana Program Library)",
      definition: "It is a collection of programs designed to support the creation and management of tokens on Solana. SPL tokens are similar to ERC-20 tokens on the Ethereum blockchain, as they follow a specific standard for creating, transferring, and managing custom tokens."
  },
  {
      term: "Genesis Block",
      definition: "It is the very first block upon which additional blocks in a blockchain are added. It is effectively the ancestor that every other block can trace its lineage back to since every block references the one preceding it."
  },
  {
      term: "PDA (Program Derived Address)",
      definition: "A Program Derived Address is a type of account on the Solana blockchain that is associated with and owned by a program rather than a specific user or account. PDAs allow us to create unique data associations, manage escrow balances, and handle many other trustless applications. "
  },
  {
      term: "Anchor",
      definition: "Anchor is a framework for quickly building secure Solana programs."
  },  
  {
      term: "Accounts (Solana)",
      definition: "Solana accounts can be thought of as storage buckets, capable of holding every data type: from tokens such as SOL to a program’s state variables (e.g. integers, strings, public keys), and even entire programs themselves. Every account has a specified owner, and a single owner can own many different accounts."
  }
];

// get id of term and definition
const term = document.getElementById('term');
const definition = document.getElementById('definition');
// get random term and definition from glossary array
let usedTerms = []; // keep track of used terms
let randomTerm, randomDefinition;

// generate a random term and definition that haven't been used before
do {
  randomTerm = glossary[Math.floor(Math.random() * glossary.length)];
} while (usedTerms.includes(randomTerm.term));

// add the term to the used terms array
usedTerms.push(randomTerm.term);

// get a random definition that hasn't been used with this term before
do {
  randomDefinition = glossary[Math.floor(Math.random() * glossary.length)];
} while (
  randomDefinition.term === randomTerm.term ||
  usedTerms.includes(randomDefinition.term)
);

// add the definition term to the used terms array
usedTerms.push(randomDefinition.term);

// set term and definition to random term and definition
term.innerHTML = randomTerm.term;
definition.innerHTML = randomDefinition.definition;
// set term and definition to random term and definition
term.innerHTML = randomTerm.term;
definition.innerHTML = randomTerm.definition;
