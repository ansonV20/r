import { useEffect, useState } from 'react';

export default function App() {
  const [mousePos, setMousePos] = useState({});
  // const arrCenter = [
  //   {x: 377, y:636, c:24},
  //   {x: 632, y:636, c:24},
  //   {x: 1146, y:636, c:24}
  // ]
  const r = 25.5;  // r   {x: 890, y:636, c:24},
  const sr = 18; // school r
  const d = 8; //dark
  const d2 = 1.6; //dark length
  const school = [763,407]
  // 257
  const arrCenter = [
    {x:508, y:149},
    {x:765, y:149},
    {x:1022, y:149},
    {x:379, y:311},
    {x:636, y:311},
    {x:893, y:311},
    {x:1150, y:311},
    {x:507, y:473},
    {x:764, y:473},
    {x:1021, y:473},
    {x:378, y:633},
    {x:635, y:633},
    {x:892, y:633},
    {x:1149, y:633}
  ]

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    const handleContextMenu = (e) => {
      e.preventDefault();
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener("contextmenu", handleContextMenu);

    // document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener("contextmenu", handleContextMenu);
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  return (
    <div>
      {((mousePos.x - school[0])**2 + (school[1] - mousePos.y)**2)**0.5 <= sr &&
        <div style={{backgroundColor:"#902D30" , width: '100%' ,height: '100vh'}}>
           <b>({mousePos.x}, {mousePos.y})</b>
        </div>
      }
      {arrCenter.map( (point,idx) => { 
        // return (mousePos.y < point.y) ?
        //   <div style={{backgroundColor:"white" , width: '100%' ,height: '100vh'}}>
        //     <b>({mousePos.x}, {mousePos.y})</b>
        //   </div> :

       return (mousePos.x >= point.x - r*4 && mousePos.x < point.x + r*4 ) && (mousePos.y >= point.y - d-2.5 && mousePos.y < point.y + d )?
          <div key={idx} style={{backgroundColor:"black" , width: '100%' ,height: '100vh'}}>
            <b>({mousePos.x}, {mousePos.y})</b>
          </div> :
          (((mousePos.x - point.x)**2 + (point.y - mousePos.y)**2)**0.5 <= r-d+d2) && mousePos.y >= point.y ?
          <div key={idx} style={{backgroundColor:"blue" , width: '100%' ,height: '100vh'}}>
            <b>({mousePos.x}, {mousePos.y})</b>
          </div> :
          // bd
          (((mousePos.x - point.x)**2 + (point.y - mousePos.y)**2)**0.5 <= r+d+d2) && mousePos.y >= point.y ?
          <div key={idx} style={{backgroundColor:"black" , width: '100%' ,height: '100vh'}}>
            <b>({mousePos.x}, {mousePos.y})</b>
          </div> :
          (((mousePos.x - point.x)**2 + (point.y - mousePos.y)**2)**0.5 <= r*2-d+d2) && mousePos.y >= point.y ?
          <div key={idx} style={{backgroundColor:"green" , width: '100%' ,height: '100vh'}}>
            <b>({mousePos.x}, {mousePos.y})</b>
          </div> :
          // gd
          (((mousePos.x - point.x)**2 + (point.y - mousePos.y)**2)**0.5 <= r*2+d+d2) && mousePos.y >= point.y ?
          <div key={idx} style={{backgroundColor:"black" , width: '100%' ,height: '100vh'}}>
            <b>({mousePos.x}, {mousePos.y})</b>
          </div> :
          (((mousePos.x - point.x)**2 + (point.y - mousePos.y)**2)**0.5 <= r*3-d+d2) && mousePos.y >= point.y ?
          <div key={idx} style={{backgroundColor:"yellow" , width: '100%' ,height: '100vh'}}>
            <b>({mousePos.x}, {mousePos.y})</b>
          </div> :
          // yd
          (((mousePos.x - point.x)**2 + (point.y - mousePos.y)**2)**0.5 <= r*3+d+d2) && mousePos.y >= point.y ?
          <div key={idx} style={{backgroundColor:"black" , width: '100%' ,height: '100vh'}}>
            <b>({mousePos.x}, {mousePos.y})</b>
          </div> :
          (((mousePos.x - point.x)**2 + (point.y - mousePos.y)**2)**0.5 <= r*4-d+d2+1) && mousePos.y >= point.y ?
          <div key={idx} style={{backgroundColor:"red" , width: '100%' ,height: '100vh'}}>
            <b>({mousePos.x}, {mousePos.y})</b>
          </div> :
          // rd
          (((mousePos.x - point.x)**2 + (point.y - mousePos.y)**2)**0.5 <= r*4+d+d2) && mousePos.y >= point.y ?
          <div key={idx} style={{backgroundColor:"black" , width: '100%' ,height: '100vh'}}>
            <b>({mousePos.x}, {mousePos.y})</b>
          </div> :
          false
        
        
          // (mousePos.x >= point.x - 100 && mousePos.x < point.x + 100 ) && (mousePos.y >= point.y - 100 && mousePos.y < point.y + 100 )?
          // <div key={idx} style={{backgroundColor:"green" , width: '100%' ,height: '100vh'}}>
          //   <b>({mousePos.x}, {mousePos.y})</b>
          // </div> :
          // (mousePos.x >= point.x - 150 && mousePos.x < point.x + 150 ) && (mousePos.y >= point.y - 150 && mousePos.y < point.y + 150 )?
          // <div key={idx} style={{backgroundColor:"yellow" , width: '100%' ,height: '100vh'}}>
          //   <b>({mousePos.x}, {mousePos.y})</b>
          // </div> :
          // (mousePos.x >= point.x - 200 && mousePos.x < point.x + 200 ) && (mousePos.y >= point.y - 200 && mousePos.y < point.y + 200 )?
          // <div key={idx} style={{backgroundColor:"red" , width: '100%' ,height: '100vh'}}>
          //   <b>({mousePos.x}, {mousePos.y})</b>
          // </div> :
          
      })

      }
    </div>
  );
}

//http://localhost:3000/
// import { useEffect, useState } from 'react';


// export default function App() {
//   const [mousePos, setMousePos] = useState({});

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setMousePos({ x: event.clientX, y: event.clientY });
//     };
//     const handleContextMenu = (e) => {
//       e.preventDefault();
//     }

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener("contextmenu", handleContextMenu);

//     // document.documentElement.style.cursor = 'none';

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener("contextmenu", handleContextMenu);
//       document.documentElement.style.cursor = 'auto';
//     };
//   }, []);

//   const p1 = [700,800,50]
//   const p2 = [700,300,50]

//   return (
//     <div>
//       {/* Math.PI */}
//       {/* 1 */}
//       {mousePos.y > p1[1] &&
//         <div style={{backgroundColor:"#323428" , width: '100%' ,height: '1000px'}}>
//            <b>({mousePos.x}, {mousePos.y})</b>
//         </div>
//       }
//       {((mousePos.x - p1[0])**2 + (p1[1] - mousePos.y)**2)**0.5 <= p1[2] &&
//         <div style={{backgroundColor:"blue" , width: '100%' ,height: '1000px'}}>
//            <b>({mousePos.x}, {mousePos.y})</b>
//         </div>
//       }
//       {((mousePos.x - p1[0])**2 + (p1[1] - mousePos.y)**2)**0.5 <= p1[2]*2 &&
//         <div style={{backgroundColor:"green" , width: '100%' ,height: '1000px'}}>
//            <b>({mousePos.x}, {mousePos.y})</b>
//         </div>
//       }
//       {((mousePos.x - p1[0])**2 + (p1[1] - mousePos.y)**2)**0.5 <= p1[2]*3 &&
//         <div style={{backgroundColor:"yellow" , width: '100%' ,height: '1000px'}}>
//            <b>({mousePos.x}, {mousePos.y})</b>
//         </div>
//       }
//       {((mousePos.x - p1[0])**2 + (p1[1] - mousePos.y)**2)**0.5 <= p1[2]*4 &&
//         <div style={{backgroundColor:"red" , width: '100%' ,height: '1000px'}}>
//            <b>({mousePos.x}, {mousePos.y})</b>
//         </div>
//       }
//       {/* 2 */}
//       {mousePos.y > p2[1] &&
//         <div style={{backgroundColor:"#323428" , width: '100%' ,height: '1000px'}}>
//            <b>({mousePos.x}, {mousePos.y})</b>
//         </div>
//       }
//       {((mousePos.x - p2[0])**2 + (p2[1] - mousePos.y)**2)**0.5 <= p2[2] &&
//         <div style={{backgroundColor:"blue" , width: '100%' ,height: '1000px'}}>
//            <b>({mousePos.x}, {mousePos.y})</b>
//         </div>
//       }
//       {((mousePos.x - p2[0])**2 + (p2[1] - mousePos.y)**2)**0.5 <= p2[2]*2 &&
//         <div style={{backgroundColor:"green" , width: '100%' ,height: '1000px'}}>
//            <b>({mousePos.x}, {mousePos.y})</b>
//         </div>
//       }
//       {((mousePos.x - p2[0])**2 + (p2[1] - mousePos.y)**2)**0.5 <= p2[2]*3 &&
//         <div style={{backgroundColor:"yellow" , width: '100%' ,height: '1000px'}}>
//            <b>({mousePos.x}, {mousePos.y})</b>
//         </div>
//       }
//       {((mousePos.x - p2[0])**2 + (p2[1] - mousePos.y)**2)**0.5 <= p2[2]*4 &&
//         <div style={{backgroundColor:"red" , width: '100%' ,height: '1000px'}}>
//            <b>({mousePos.x}, {mousePos.y})</b>
//         </div>
//       }


//       <div style={{backgroundColor:"#323428" , width: '100%' ,height: '1000px'}}>
//         <b>({mousePos.x}, {mousePos.y})</b>
//       </div>
//     </div>
//   );
// }





