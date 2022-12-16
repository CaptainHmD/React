// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// // Challenge: Create your own custom React component!
// // Call it "MainContent", and have it return a simple
// // h1 element that says "I'm learning React!"

// // Afterward, render it below the Navbar (which
// // you can do inside the ReactDOM.render call below)

// const Test = <h1>hi test jsx
//     <h2>h2 jsx</h2>
// </h1>;
// console.log(Test);
// function Content(){
//     return (
//         <h1>
//             content
//         </h1>
//     )
// }

// // ReactDOM.render(
// //     <div>
// //         <Navbar />
// //         <Content />
// //     </div>,
// //     document.getElementById("root")
// // )

// const page = (<div>
// <Navbar />
// <Content />
// </div>)
// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// function CustomComponent (){

//     return(
//         <div>
//             <ol>
//                 <li>to get a lot of money</li>
//                 <li>to ???</li>
//                 <li>!!!!!!!</li>
//             </ol>
//         </div>
//     )

// }

// ReactDOM.render(<CustomComponent/>,document.getElementById('root'))

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

// function CustomComponent() {
//   return (
//     <div>
//       <header>
//         <nav>
//           <img
//             width="60px"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
//             alt="known"
//           ></img>
//         </nav>
//       </header>
//       <h1>I'm excited to learn React"</h1>
//       <ol>
//         <li>to get a lot of money</li>
//         <li>to ???</li>
//         <li>!!!!!!!</li>
//       </ol>
//       <footer>© 2022 hamad development. All rights reserved.</footer>
//     </div>
//   );
// }

// ReactDOM.render(<CustomComponent />, document.getElementById("root"));

//! Parent/Child Components
/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

// - Move the `footer` into its own component called "Footer"
//   and render that component inside the Page component.
// - Move the `h1` and `ol` together into another component
//   called "MainContent" and render inside Page as well.

// ReactDOM.render(<Page />, document.getElementById("root"))

// answer
function HeaderComponent() {
  return (
    <header >
      <nav className="header-navbar">
        <img
          className="nav-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt="known"
        ></img>
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </nav>

    </header>
  );
}
function MainContent() {
    return (
      <div>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>
            It's a popular library, so I'll be able to fit in with the cool
            kids!
          </li>
          <li>I'm more likely to get a job as a developer if I know React</li>
        </ol>
      </div>
    );
  }
  function Footer(){
    return(
        <footer>
        <small>© 2021 Hamad development. All rights reserved.</small>
      </footer>
    );
  }
function Page() {
  return (
    <div>
      <HeaderComponent />
        <MainContent/>    
        <Footer/>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
