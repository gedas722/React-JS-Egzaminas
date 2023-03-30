import React from "react";
import "./style.css";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Tile from "../../components/Tile";
import AirPrivacy from "../../logo/privacy.jpeg";

function Privacy() {
  return (
    <div>
      <Navbar />
      <div className="policy-container">
        <Tile name="Airbnb Privacy" img src={AirPrivacy} alt="" />
        <div className="privacy-policy">
          <h1>Privacy Policy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, qui eos est ducimus deserunt ullam. Ex
            distinctio est hic illum magni magnam, non odio commodi nulla iusto tempora impedit consequatur nemo
            blanditiis quasi dolores dignissimos officiis libero exercitationem, soluta aliquam repellat sed voluptate
            unde! Sequi sed iusto aspernatur culpa explicabo fugit ullam, quidem hic nulla dolore quo beatae illo
            aliquid repellat vitae in modi optio doloribus ad maxime quos pariatur necessitatibus. Quaerat quisquam
            perspiciatis quos cumque fugit quasi voluptatem tenetur, amet molestiae vitae nulla illo exercitationem
            natus voluptatum tempora, sequi consequatur maxime! Cupiditate esse dolore autem error cum! Consectetur,
            eum! Doloremque ad rem porro ipsam dolores perspiciatis est quam amet? Perferendis consequuntur
            reprehenderit odit, dicta impedit rem laboriosam nesciunt veniam esse natus eveniet quis minima odio nisi.
            Officia non quod, nesciunt alias facilis ut aperiam magni praesentium delectus autem, fugiat esse libero
            ipsum, ex cupiditate enim assumenda doloremque? Quia tempora corporis delectus eos, dignissimos quos,
            officiis nulla minima nisi sapiente aut unde. Nihil tenetur saepe dicta est asperiores, error tempora,
            possimus ratione laboriosam perspiciatis ipsa quo laudantium id cum blanditiis expedita quasi
            exercitationem. Repudiandae maiores iusto, nihil laborum aliquam deleniti iste quis! Sint cum illo pariatur
            obcaecati minus nam quae praesentium soluta similique nobis consequatur beatae accusamus architecto,
            exercitationem sapiente officia dolore alias molestiae, minima dignissimos. Sapiente quia voluptatum
            reiciendis modi veniam praesentium quidem, ea dolorem dolores molestias aliquid? Nulla laborum consequatur
            doloremque unde pariatur accusamus dolore expedita quod nesciunt maxime nihil repellat minus, commodi
            possimus non vitae quibusdam natus. Illo sapiente similique nobis repellat reprehenderit. Consequatur iusto
            obcaecati modi asperiores mollitia ab quia est velit cumque numquam. Tenetur repellendus pariatur odit hic
            laborum sapiente accusantium beatae adipisci ducimus incidunt quia magnam, blanditiis eius ex voluptatibus
            iure veniam officiis ipsa laudantium quibusdam doloremque molestiae nemo eum tempore! Recusandae,
            praesentium fuga.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Privacy;
