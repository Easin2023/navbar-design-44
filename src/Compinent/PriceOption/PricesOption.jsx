import Price from "../Price/Price";

const PricesOption = () => {
     const gymPackages = [
          {
            ID: 101,
            Package: "Starter Package",
            Price: 299.99,
            Features: ["Access to Gym Equipment", "Personal Trainer Consultation"]
          },
          {
            ID: 202,
            Package: "Advanced Package",
            Price: 499.00,
            Features: ["Full Gym Access", "Monthly Group Classes", "Nutrition Consultation"]
          },
          {
            ID: 303,
            Package: "Premium Package",
            Price: 799.95,
            Features: ["All-Access Membership", "Unlimited Personal Training", "Massage Sessions"]
          },
          {
            ID: 404,
            Package: "Family Package",
            Price: 999.99,
            Features: ["Family Membership", "Kids' Fitness Classes", "Access to Swimming Pool"]
          },
          {
            ID: 505,
            Package: "Corporate Package",
            Price: 1999.99,
            Features: ["Corporate Membership", "Team Building Workshops", "Dedicated Corporate Lounge"]
          }
        ];
     return (
          <div>
            <h1 className="text-center my-10 font-semibold text-5xl">my gym packages</h1>
               <div className="grid md:grid-cols-3 gap-6 m-6">
               {
                 gymPackages.map(packages => <Price 
                  key={packages.ID}
                  data={packages}
                 ></Price>)
               }
               </div>
          </div>
     );
   };
   
   export default PricesOption;