/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace PeerLocal {
  export type OfferStruct = {
    owner: PromiseOrValue<string>;
    communityId: PromiseOrValue<BigNumberish>;
    metadata: PromiseOrValue<string>;
    reputationRequirement: PromiseOrValue<BigNumberish>;
    stakingRequirement: PromiseOrValue<BigNumberish>;
    offerStatus: PromiseOrValue<BigNumberish>;
  };

  export type OfferStructOutput = [
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    number
  ] & {
    owner: string;
    communityId: BigNumber;
    metadata: string;
    reputationRequirement: BigNumber;
    stakingRequirement: BigNumber;
    offerStatus: number;
  };
}

export interface PeerLocalInterface extends utils.Interface {
  functions: {
    "acceptOffer(uint256,uint256)": FunctionFragment;
    "communities(uint256)": FunctionFragment;
    "communityMembers(uint256,uint256)": FunctionFragment;
    "createCommunity(string,address,uint256)": FunctionFragment;
    "createOffer(uint256,string,uint256,uint256)": FunctionFragment;
    "endOffer(uint256,uint256,bool)": FunctionFragment;
    "joinCommunity(uint256,bytes)": FunctionFragment;
    "offers(uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "reputationToken()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOffer"
      | "communities"
      | "communityMembers"
      | "createCommunity"
      | "createOffer"
      | "endOffer"
      | "joinCommunity"
      | "offers"
      | "owner"
      | "renounceOwnership"
      | "reputationToken"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOffer",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "communities",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "communityMembers",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createCommunity",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createOffer",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "endOffer",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "joinCommunity",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "offers",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reputationToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "communities",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "communityMembers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCommunity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endOffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "joinCommunity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "offers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reputationToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "CommunityCreated(uint256,string,address,address,uint256)": EventFragment;
    "MemberJoinedCommunity(uint256,address)": EventFragment;
    "OfferAccepted(uint256,uint256,address)": EventFragment;
    "OfferClosed(uint256,uint256,address,bool)": EventFragment;
    "OfferCreated(uint256,uint256,tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PeerLocalInitalized(address)": EventFragment;
    "ReputationTokenBurn(uint256)": EventFragment;
    "ReputationTokenMint(address,uint256)": EventFragment;
    "collateralTokenReturned(address,uint256)": EventFragment;
    "collateralTokenStaked(address,uint256)": EventFragment;
    "reputationTokenReturned(address,uint256)": EventFragment;
    "reputationTokenStaked(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CommunityCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberJoinedCommunity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OfferAccepted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OfferClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OfferCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PeerLocalInitalized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReputationTokenBurn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReputationTokenMint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "collateralTokenReturned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "collateralTokenStaked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "reputationTokenReturned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "reputationTokenStaked"): EventFragment;
}

export interface CommunityCreatedEventObject {
  communityId: BigNumber;
  ipfsMetadata: string;
  owner: string;
  stakingToken: string;
  stakingRequirement: BigNumber;
}
export type CommunityCreatedEvent = TypedEvent<
  [BigNumber, string, string, string, BigNumber],
  CommunityCreatedEventObject
>;

export type CommunityCreatedEventFilter =
  TypedEventFilter<CommunityCreatedEvent>;

export interface MemberJoinedCommunityEventObject {
  communityId: BigNumber;
  member: string;
}
export type MemberJoinedCommunityEvent = TypedEvent<
  [BigNumber, string],
  MemberJoinedCommunityEventObject
>;

export type MemberJoinedCommunityEventFilter =
  TypedEventFilter<MemberJoinedCommunityEvent>;

export interface OfferAcceptedEventObject {
  communityId: BigNumber;
  offerId: BigNumber;
  member: string;
}
export type OfferAcceptedEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  OfferAcceptedEventObject
>;

export type OfferAcceptedEventFilter = TypedEventFilter<OfferAcceptedEvent>;

export interface OfferClosedEventObject {
  communityId: BigNumber;
  offerId: BigNumber;
  member: string;
  result: boolean;
}
export type OfferClosedEvent = TypedEvent<
  [BigNumber, BigNumber, string, boolean],
  OfferClosedEventObject
>;

export type OfferClosedEventFilter = TypedEventFilter<OfferClosedEvent>;

export interface OfferCreatedEventObject {
  communityId: BigNumber;
  offerId: BigNumber;
  newOffer: PeerLocal.OfferStructOutput;
}
export type OfferCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, PeerLocal.OfferStructOutput],
  OfferCreatedEventObject
>;

export type OfferCreatedEventFilter = TypedEventFilter<OfferCreatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PeerLocalInitalizedEventObject {
  erc20: string;
}
export type PeerLocalInitalizedEvent = TypedEvent<
  [string],
  PeerLocalInitalizedEventObject
>;

export type PeerLocalInitalizedEventFilter =
  TypedEventFilter<PeerLocalInitalizedEvent>;

export interface ReputationTokenBurnEventObject {
  burnAmount: BigNumber;
}
export type ReputationTokenBurnEvent = TypedEvent<
  [BigNumber],
  ReputationTokenBurnEventObject
>;

export type ReputationTokenBurnEventFilter =
  TypedEventFilter<ReputationTokenBurnEvent>;

export interface ReputationTokenMintEventObject {
  member: string;
  mintAmount: BigNumber;
}
export type ReputationTokenMintEvent = TypedEvent<
  [string, BigNumber],
  ReputationTokenMintEventObject
>;

export type ReputationTokenMintEventFilter =
  TypedEventFilter<ReputationTokenMintEvent>;

export interface collateralTokenReturnedEventObject {
  member: string;
  stakingRequirementReturned: BigNumber;
}
export type collateralTokenReturnedEvent = TypedEvent<
  [string, BigNumber],
  collateralTokenReturnedEventObject
>;

export type collateralTokenReturnedEventFilter =
  TypedEventFilter<collateralTokenReturnedEvent>;

export interface collateralTokenStakedEventObject {
  member: string;
  stakingRequirementStaked: BigNumber;
}
export type collateralTokenStakedEvent = TypedEvent<
  [string, BigNumber],
  collateralTokenStakedEventObject
>;

export type collateralTokenStakedEventFilter =
  TypedEventFilter<collateralTokenStakedEvent>;

export interface reputationTokenReturnedEventObject {
  member: string;
  reputationRequirementReturned: BigNumber;
}
export type reputationTokenReturnedEvent = TypedEvent<
  [string, BigNumber],
  reputationTokenReturnedEventObject
>;

export type reputationTokenReturnedEventFilter =
  TypedEventFilter<reputationTokenReturnedEvent>;

export interface reputationTokenStakedEventObject {
  member: string;
  reputationRequirementStaked: BigNumber;
}
export type reputationTokenStakedEvent = TypedEvent<
  [string, BigNumber],
  reputationTokenStakedEventObject
>;

export type reputationTokenStakedEventFilter =
  TypedEventFilter<reputationTokenStakedEvent>;

export interface PeerLocal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PeerLocalInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOffer(
      _communityId: PromiseOrValue<BigNumberish>,
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    communities(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, string] & {
        ipfsMetadata: string;
        stakingRequirement: BigNumber;
        owner: string;
        stakingToken: string;
      }
    >;

    communityMembers(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createCommunity(
      _ipfsMetadata: PromiseOrValue<string>,
      _stakingToken: PromiseOrValue<string>,
      _stakingRequirement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createOffer(
      _communityId: PromiseOrValue<BigNumberish>,
      _metadata: PromiseOrValue<string>,
      _reputationRequirement: PromiseOrValue<BigNumberish>,
      _stakingRequirement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endOffer(
      _communityId: PromiseOrValue<BigNumberish>,
      _offerId: PromiseOrValue<BigNumberish>,
      _finalResult: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    joinCommunity(
      _communityId: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    offers(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber, BigNumber, number] & {
        owner: string;
        communityId: BigNumber;
        metadata: string;
        reputationRequirement: BigNumber;
        stakingRequirement: BigNumber;
        offerStatus: number;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reputationToken(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOffer(
    _communityId: PromiseOrValue<BigNumberish>,
    _offerId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  communities(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, string] & {
      ipfsMetadata: string;
      stakingRequirement: BigNumber;
      owner: string;
      stakingToken: string;
    }
  >;

  communityMembers(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  createCommunity(
    _ipfsMetadata: PromiseOrValue<string>,
    _stakingToken: PromiseOrValue<string>,
    _stakingRequirement: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createOffer(
    _communityId: PromiseOrValue<BigNumberish>,
    _metadata: PromiseOrValue<string>,
    _reputationRequirement: PromiseOrValue<BigNumberish>,
    _stakingRequirement: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endOffer(
    _communityId: PromiseOrValue<BigNumberish>,
    _offerId: PromiseOrValue<BigNumberish>,
    _finalResult: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  joinCommunity(
    _communityId: PromiseOrValue<BigNumberish>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  offers(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, BigNumber, BigNumber, number] & {
      owner: string;
      communityId: BigNumber;
      metadata: string;
      reputationRequirement: BigNumber;
      stakingRequirement: BigNumber;
      offerStatus: number;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reputationToken(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOffer(
      _communityId: PromiseOrValue<BigNumberish>,
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    communities(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, string] & {
        ipfsMetadata: string;
        stakingRequirement: BigNumber;
        owner: string;
        stakingToken: string;
      }
    >;

    communityMembers(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    createCommunity(
      _ipfsMetadata: PromiseOrValue<string>,
      _stakingToken: PromiseOrValue<string>,
      _stakingRequirement: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createOffer(
      _communityId: PromiseOrValue<BigNumberish>,
      _metadata: PromiseOrValue<string>,
      _reputationRequirement: PromiseOrValue<BigNumberish>,
      _stakingRequirement: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    endOffer(
      _communityId: PromiseOrValue<BigNumberish>,
      _offerId: PromiseOrValue<BigNumberish>,
      _finalResult: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    joinCommunity(
      _communityId: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    offers(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, BigNumber, BigNumber, number] & {
        owner: string;
        communityId: BigNumber;
        metadata: string;
        reputationRequirement: BigNumber;
        stakingRequirement: BigNumber;
        offerStatus: number;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    reputationToken(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CommunityCreated(uint256,string,address,address,uint256)"(
      communityId?: PromiseOrValue<BigNumberish> | null,
      ipfsMetadata?: null,
      owner?: PromiseOrValue<string> | null,
      stakingToken?: null,
      stakingRequirement?: null
    ): CommunityCreatedEventFilter;
    CommunityCreated(
      communityId?: PromiseOrValue<BigNumberish> | null,
      ipfsMetadata?: null,
      owner?: PromiseOrValue<string> | null,
      stakingToken?: null,
      stakingRequirement?: null
    ): CommunityCreatedEventFilter;

    "MemberJoinedCommunity(uint256,address)"(
      communityId?: PromiseOrValue<BigNumberish> | null,
      member?: PromiseOrValue<string> | null
    ): MemberJoinedCommunityEventFilter;
    MemberJoinedCommunity(
      communityId?: PromiseOrValue<BigNumberish> | null,
      member?: PromiseOrValue<string> | null
    ): MemberJoinedCommunityEventFilter;

    "OfferAccepted(uint256,uint256,address)"(
      communityId?: PromiseOrValue<BigNumberish> | null,
      offerId?: PromiseOrValue<BigNumberish> | null,
      member?: PromiseOrValue<string> | null
    ): OfferAcceptedEventFilter;
    OfferAccepted(
      communityId?: PromiseOrValue<BigNumberish> | null,
      offerId?: PromiseOrValue<BigNumberish> | null,
      member?: PromiseOrValue<string> | null
    ): OfferAcceptedEventFilter;

    "OfferClosed(uint256,uint256,address,bool)"(
      communityId?: PromiseOrValue<BigNumberish> | null,
      offerId?: PromiseOrValue<BigNumberish> | null,
      member?: PromiseOrValue<string> | null,
      result?: null
    ): OfferClosedEventFilter;
    OfferClosed(
      communityId?: PromiseOrValue<BigNumberish> | null,
      offerId?: PromiseOrValue<BigNumberish> | null,
      member?: PromiseOrValue<string> | null,
      result?: null
    ): OfferClosedEventFilter;

    "OfferCreated(uint256,uint256,tuple)"(
      communityId?: PromiseOrValue<BigNumberish> | null,
      offerId?: null,
      newOffer?: null
    ): OfferCreatedEventFilter;
    OfferCreated(
      communityId?: PromiseOrValue<BigNumberish> | null,
      offerId?: null,
      newOffer?: null
    ): OfferCreatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "PeerLocalInitalized(address)"(
      erc20?: PromiseOrValue<string> | null
    ): PeerLocalInitalizedEventFilter;
    PeerLocalInitalized(
      erc20?: PromiseOrValue<string> | null
    ): PeerLocalInitalizedEventFilter;

    "ReputationTokenBurn(uint256)"(
      burnAmount?: null
    ): ReputationTokenBurnEventFilter;
    ReputationTokenBurn(burnAmount?: null): ReputationTokenBurnEventFilter;

    "ReputationTokenMint(address,uint256)"(
      member?: PromiseOrValue<string> | null,
      mintAmount?: null
    ): ReputationTokenMintEventFilter;
    ReputationTokenMint(
      member?: PromiseOrValue<string> | null,
      mintAmount?: null
    ): ReputationTokenMintEventFilter;

    "collateralTokenReturned(address,uint256)"(
      member?: PromiseOrValue<string> | null,
      stakingRequirementReturned?: null
    ): collateralTokenReturnedEventFilter;
    collateralTokenReturned(
      member?: PromiseOrValue<string> | null,
      stakingRequirementReturned?: null
    ): collateralTokenReturnedEventFilter;

    "collateralTokenStaked(address,uint256)"(
      member?: PromiseOrValue<string> | null,
      stakingRequirementStaked?: null
    ): collateralTokenStakedEventFilter;
    collateralTokenStaked(
      member?: PromiseOrValue<string> | null,
      stakingRequirementStaked?: null
    ): collateralTokenStakedEventFilter;

    "reputationTokenReturned(address,uint256)"(
      member?: PromiseOrValue<string> | null,
      reputationRequirementReturned?: null
    ): reputationTokenReturnedEventFilter;
    reputationTokenReturned(
      member?: PromiseOrValue<string> | null,
      reputationRequirementReturned?: null
    ): reputationTokenReturnedEventFilter;

    "reputationTokenStaked(address,uint256)"(
      member?: PromiseOrValue<string> | null,
      reputationRequirementStaked?: null
    ): reputationTokenStakedEventFilter;
    reputationTokenStaked(
      member?: PromiseOrValue<string> | null,
      reputationRequirementStaked?: null
    ): reputationTokenStakedEventFilter;
  };

  estimateGas: {
    acceptOffer(
      _communityId: PromiseOrValue<BigNumberish>,
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    communities(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    communityMembers(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createCommunity(
      _ipfsMetadata: PromiseOrValue<string>,
      _stakingToken: PromiseOrValue<string>,
      _stakingRequirement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createOffer(
      _communityId: PromiseOrValue<BigNumberish>,
      _metadata: PromiseOrValue<string>,
      _reputationRequirement: PromiseOrValue<BigNumberish>,
      _stakingRequirement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endOffer(
      _communityId: PromiseOrValue<BigNumberish>,
      _offerId: PromiseOrValue<BigNumberish>,
      _finalResult: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    joinCommunity(
      _communityId: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    offers(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reputationToken(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOffer(
      _communityId: PromiseOrValue<BigNumberish>,
      _offerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    communities(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    communityMembers(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createCommunity(
      _ipfsMetadata: PromiseOrValue<string>,
      _stakingToken: PromiseOrValue<string>,
      _stakingRequirement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createOffer(
      _communityId: PromiseOrValue<BigNumberish>,
      _metadata: PromiseOrValue<string>,
      _reputationRequirement: PromiseOrValue<BigNumberish>,
      _stakingRequirement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endOffer(
      _communityId: PromiseOrValue<BigNumberish>,
      _offerId: PromiseOrValue<BigNumberish>,
      _finalResult: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    joinCommunity(
      _communityId: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    offers(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reputationToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
