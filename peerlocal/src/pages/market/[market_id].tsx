import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../../features/Layout";
import Link from "next/link";
import { useCommunity } from "src/features/peerlocal/hooks/usePeerLocal";
import { useRouter } from "next/router";
import { useOfferIPFS } from "src/features/peerlocal/hooks/usePeerLocal";
import { Loading } from "../../features/Loading";

function OfferCard(props: { ipfsHash: string; offerId: string }) {
  const offer = useOfferIPFS({ ipfsHash: props.ipfsHash });
  if (offer.isLoading) {
    return (
      <>
        {props.offerId}
        <Loading />;
      </>
    );
  }
  return (
    <li>
      <div className="card-compact card mx-5 my-2 w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={
              offer.data?.Image.startsWith("http")
                ? offer.data.Image
                : "/drill.jpg"
            }
            alt="a Drill, jo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{offer.data?.Name}</h2>
          <p>{offer.data?.Description}</p>
          <div className="card-actions justify-end">
            <Link
              className="btn-primary btn"
              href={"/listing/" + props.ipfsHash}
            >
              Borrow now!
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

const Market: NextPage = () => {
  const router = useRouter();
  const offers = useCommunity({
    id: router.query.market_id ? router.query.market_id.toString() : "0",
  });
  return (
    <div>
      <Head>
        <title>Market Overview</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome to our <span className="text-accent">Market</span>
          </h1>
          <p className="text-2xl font-extrabold tracking-tight text-white">
            You can{" "}
            <Link
              href={("/createOffer/" + router.query.market_id) as string}
              className="text-accent underline"
            >
              List an item
            </Link>
          </p>
          <p className="text-2xl font-extrabold tracking-tight text-white">
            Or Browse active listings below:
          </p>
        </div>
        <div className="container flex items-center justify-center">
          {/*
                    Fields:
                    Name
                    Price
                    Availablility
                    */}

          <ul className="min-w-5/12 flex flex-wrap items-center justify-center ">
            {offers.data?.community?.offers.map((offer, i) => {
              return (
                <OfferCard
                  offerId={offer.offerId}
                  ipfsHash={offer.metadata}
                  key={offer.id}
                />
              );
            })}
          </ul>
        </div>
      </Layout>
    </div>
  );
};

export default Market;
