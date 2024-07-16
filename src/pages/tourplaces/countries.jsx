import React from "react";
import CountriesCard from "./countriescard";

const TourCities = () => {
  return (
    <div id="about" className="pt-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="px-3 mb-[80px] text-left w-[520px]">
          <h2 className="m-0 mb-5 leading-[36px] text-[30px] font-bold capitalize text-[#2a2a2a]">
            Visit One Of Our Countries Now
          </h2>
          <p className="text-[16px] leading-[30px] text-[#afafaf]">
            Discover the best offers in each city, curated just for you. Immerse
            yourself in a world of savings and indulge in unparalleled
            experiences.
          </p>
        </div>
        <CountriesCard
          img={"https://zamontour.uz/assets/images/dubai2.jpg"}
          heading="Dubai"
          littleText="United Arab Emirated"
          mainText="Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks."
          peopleCount={8.66}
          area={41.29}
          price={"1.100.200"}
        />
        <CountriesCard
          img={"https://zamontour.uz/assets/images/country-02.jpg"}
          heading="Antalya"
          littleText="Turkey"
          mainText="Antalya is the fastest-growing city in Turkey, and tourists from around the world are discovering its fabulous mix of great beaches and traditional Turkish culture. Kids will love the Beach Park, which features Aqua Land (a waterslide-fanatic's dream) and Dolphin Land (home to dolphins, sea lions and white whales). Make sure to explore the old town center and to see Hadrian's Gate."
          peopleCount={44.48}
          area={275.4}
          price={"946.000"}
        />
        <CountriesCard
          img={"https://zamontour.uz/assets/images/sharm2.jpg"}
          heading="Sharm El-Sheikh"
          littleText="Egypt"
          mainText="Sharm El Sheikh is the center of tourism action in Sinai Peninsula and it has the world top diving sites. Specially the underwater wonders of Ras Mohammed national park that took Sharm city to whole different level. The city has diving and shipwreck sites that attract both advanced and recreational divers from around the world to discover the un parallel marine life deep down the red sea."
          peopleCount={67.41}
          area={551.5}
          price={"425.600"}
        />
        <CountriesCard
          img={"https://zamontour.uz/assets/images/istanbul3.jpg"}
          heading="Istanbul"
          littleText="Turkey"
          mainText="Istanbul is the most populous city in Turkey and its cultural, economic and historic center. It is located in north-western part of Turkey, divided into European and Asian side by Bosphorus, which connects the Sea of Marmara and Black Sea. It is the only city in the world that sits on two continents."
          peopleCount={67.41}
          area={551.5}
          price={"425.600"}
        />
      </div>
    </div>
  );
};

export default TourCities;
