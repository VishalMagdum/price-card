
import './App.css';
import Card from './Card';

function App() {
  let data =[ {
    plan:"FREE",
    price:0,
    user:"Single User",
    userEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProject:"Unlimited Public Projects",
    publicProjectEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subdomain:"Free Subdomain",
    subdomainEnabler:false,
    reports:"Monthly Status Reports",
    reportsEnabler:false

  },
  {
    plan:"PLUS",
    price:9,
    user:"5 Users",
    userEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProject:"Unlimited Public Projects",
    publicProjectEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subdomain:"Free Subdomain",
    subdomainEnabler:true,
    reports:"Monthly Status Reports",
    reportsEnabler:false
  },
  {
    plan:"PRO",
    price:49,
    user:"Unlimited Users",
    userEnabler:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicProject:"Unlimited Public Projects",
    publicProjectEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subdomain:"Free Subdomain",
    subdomainEnabler:true,
    reports:"Monthly Status Reports",
    reportsEnabler:true
  }
  
]
  return (
    // <!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! -->

<section className="pricing py-5">
  <div className="container">
    <div className="row">
     {/* <Card card={data[0]}></Card>
     <Card card={data[1]}></Card>
     <Card card={data[2]}></Card> */}

    
  
      {
        data.map((e)=>{
         return <Card card={e}></Card>
        })
      }
     
    
    </div>
  </div>
</section>
  );
}

export default App;
