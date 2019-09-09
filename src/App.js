import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class Content extends React.Component{
  constructor(props){
    super(props);
  }

	render(){
    return(
		  <div className="w3-card-4 w3-margin w3-white">
		    <img src={this.props.val.Image_src}  style={{width:"100%"}} />
		    <div className="w3-container">
		      <h3><b> {this.props.val.Title} </b></h3>
		      <h5> {this.props.val.Describtion} <span class="w3-opacity"> {this.props.val.Date} </span></h5>
		    </div>

		    <div className="w3-container">
          {this.props.val.Text.split('\n').map((item=> <p>{item}</p>))} 
          {/*
		      <div className="w3-row">
		        <div className="w3-col m8 s12">
		          <p><a href="https://www.facebook.com/stank2012"><button className="w3-button w3-padding-large w3-white w3-border"><b>Contact</b></button></a></p>
		        </div>

             <div class="w3-col m4 w3-hide-small">
					     <p><span class="w3-padding-large w3-right"><b>Watch  </b> <span class="w3-tag">0</span></span></p>
					   </div>
		      </div>
          */}
		    </div>
		  </div>
    );
  }
}

class Sub_Content extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="w3-card w3-margin w3-margin-top">
      <img src={this.props.val.Image_src} style={{"width":"100%"}} />
        <div className="w3-container w3-white">
          <h4><b> {this.props.val.Title} </b></h4>
            {this.props.val.Text.split('\n').map((item=> <p>{item}</p>))} 
        </div>
      </div>
    );
  }
}

class Top_Content extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="w3-card w3-margin">
        <div className="w3-container w3-padding">
          <h4>Programming skill</h4>
        </div>
        <ul className="w3-ul w3-hoverable w3-white">
          {this.props.Top.map(temp =>(
            <li className="w3-padding-16 w3-hide-medium w3-hide-small"> 
              	<img src={temp.Image_src} alt="Image" className="w3-left w3-margin-right" style={{"width":"40px","height":"40px"}} />
	              <span className="w3-large">{temp.Name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class Top_Interest extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

    return(
      <div className="w3-card w3-margin">
        <div className="w3-container w3-padding">
          <h4>Interest</h4>
        </div>
        <div className="w3-container w3-white">
        <p>{this.props.Arr.map(temp =>(
          <div><span className="w3-tag w3-black w3-margin-bottom">{temp}</span> <br/></div> 
        ))}
        </p>
        </div>
      </div>
    );
  }
}

class Head extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <header class="w3-container w3-center w3-padding-32"> 
        <h1><b>{this.props.Title}</b></h1>
        <p> {this.props.Say} <span class="w3-tag">{this.props.Name}</span></p>
      </header>
    );
  }
}


class Page extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      IsMattayom:false
    };
    this.setMattayom = this.setMattayom.bind(this);
  }
  
  setMattayom(val) {
    this.setState({IsMattayom:val})
  }

  render(){
    const Val_POST = [
      {
        IsMattayom:2,
        Image_src : "",
        Title : "Hello",
        Describtion : "",
        Date : "",
        Text : "ผมเป็นสาย competitive programming (สายเขียนโค้ดแข่ง) แต่ก็เขียน website ได้บ้าง เคยเขียนด้วย PHP , HTML และ SQL \n"
              +"ผลงานตอนมัธยม :\nได้เหรียญทองแดงในงาน TOI 12 \nได้เหรียญทองแดงในงาน TOI 13 \nได้รางวัลอันดับสองในงาน iCode 2016 ที่ มหาวิทยาลัยเชียงใหม่ \nได้รางวัลอันดับสองในงาน iCode 2017 ที่ มหาวิทยาลัยเชียงใหม่ \n ได้รางวัลชนะเลิศงาน AUCSFEST : Code++ challange 2016 \n ได้รางวัลเหรียญทองชนะเลิศอันดับ 1 รายการแข่งขันเขียนโปรแกรมด้วยภาษาคอมพิวเตอร์ในงานศิลปหัตถกรรมระดับภาคเหนือ 2560 \n"
              +"ผลงานตอนมหาวิทยาลัย :\nได้รางวัลชนะเลิศอันดับ 1 รายการ Coder track ในงาน Coding thailand by depa รุ่นไม่เกินปริญญาตรี\nได้ไปแข่งขันในงานhackathon CIMB 3D Conquest รายการ Coding ที่ประเทศมาเลเซีย\nได้ไปแสดงproject Plannee ในงาน Demo day : Startup Thailand League 2019"
      } ,
      {
        IsMattayom:true,
        Image_src : "toi12.jpg",
        Title : "12th Thailand Olympiad in Informatics",
        Describtion : "TOI 12",
        Date : "7-10 June 2016",
        Text : "งานแข่งขันคอมพิวเตอร์โอลิมปิค ที่รวมผู้แทนศูนย์ สอวน. คอมพิวเตอร์ 6 คน ของแต่ละศูนย์(รวมทั้งหมดประมาณ 90 คน) \n มาแข่งเขียนโปรแกรมเป็นเวลา 2 วัน โดยโจทย์มีทั้งหมด 6 ข้อ เวลารวม 2 ชั่วโมง\nงานนี้ผมได้เหรียญทองแดงและเป็นเหรียญทองแดงคนสุดท้าย (ทองแดง Lower bound)"
      },
      {
        IsMattayom:true,
        Image_src : "icode2016.jpg",
        Title : "ICode 2016 at CMU",
        Describtion : "",
        Date : "14 August 2016",
        Text : "งานแข่งขันเขียนโปรแกรมที่คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ แข่งใช้ระบบACMและเป็นทีมไม่เกินสามคน\nโดยทีมผมได้รางวัลรองชนะเลิศอันดับ 1"
      },
      {
        IsMattayom:true,
        Image_src : "aucsfest.jpg",
        Title : "AUCSFEST : Code++ Challange 2016",
        Describtion : "",
        Date : "25-26 November 2016",
        Text : "งานแข่งขันเขียนโปรแกรมที่ ABAC งานนี้โจทย์ถือว่าโหดพอสมควร โดยจะแบ่งเป็น 2 ระดับ\nระดับแรก Beginner สำหรับคนที่ไม่เคยผ่าน สอวน.คอมพิวเตอร์ ค่าย 2 \nระดับที่สอง Adavance สำหรับคนที่ผ่าน สอวน.คอมพิวเตอร์ ค่าย2 ขี้นไปแต่ไม่ถึงระดับ สสวท.คอมพิวเตอร์\n ผมได้รางวัลชนะเลิศอันดับ 1 ในระดับ advance"
      },
      {
        IsMattayom:true,
        Image_src : "toi13.jpg",
        Title : "13th Thailand Olympiad in Informatics",
        Describtion : "TOI 13",
        Date : "12-15 June 2017",
        Text : "งานแข่งขันคอมพิวเตอร์โอลิมปิค ที่รวมผู้แทนศูนย์ สอวน. คอมพิวเตอร์ 6 คน ของแต่ละศูนย์(รวมทั้งหมดประมาณ 90 คน) \n มาแข่งเขียนโปรแกรมเป็นเวลา 2 วัน โดยโจทย์มีทั้งหมด 6 ข้อ เวลารวม 2 ชั่วโมง\nงานนี้ผมได้เหรียญทองแดงแต่ไม่คนสุดท้ายนะ"
      },
      {
        IsMattayom:true,
        Image_src : "icode2017.jpg",
        Title : "ICode 2017 at CMU",
        Describtion : "",
        Date : "20 August 2017",
        Text : "งานแข่งขันเขียนโปรแกรมที่คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ แข่งใช้ระบบACMและเป็นทีมไม่เกินสามคน\nโดยทีมผมได้รางวัลรองชนะเลิศอันดับ 1\nและยังได้รับรางวัลพิเศษชื่อรางวัลว่า 'ข้ามาคนเดียว'"
      },
      {
        IsMattayom:false,
        Image_src : "codingthailand.jpg",
        Title : "Coding Thailand @Digital Thailand Big Bang 2018",
        Describtion : "Coder track",
        Date : "19 September 2018",
        Text : "งานแข่ง Coding ออกแนว Solving problem จาก test data ที่เขาให้มาและส่งให้เร็วที่สุดคะแนนดูจากใครส่งผ่านแล้วเร็วกว่ากัน\nในงานนี้ผมได้รางวัลชนะเลิศอันดับ 1 รุ่นไม่เกินปริญญาตรี"
      },
      {
        IsMattayom:false,
        Image_src : "cimb3d.jpg",
        Title : "CIMB 3D Conquest",
        Describtion : "Coding",
        Date : "30 November - 1 December 2018",
        Text : "งานแข่ง Hackathon ครั้งแรกในชีวิตผมและได้ไปแข่งที่มาเลเซีย \n ในงานเขาให้ออกแบบส่วน vertify user เวลา login เขา app ธนาคาร โดยคะแนนจะมาจาก Idea , Prototype และ Pitching"
      },
      {
        IsMattayom:false,
        Image_src : "demoday.jpg",
        Title : "Startup Thailand League 2019",
        Describtion : "Demo day",
        Date : "30 November - 1 December 2018",
        Text : "งาน Startup ที่เพื่อนผมชวนมาทำ Project Plannee แอพบันทึกรายรับรายจ่ายแบบใช้เสียง งานนี้เข้าไปถึงรอบลึกจนได้แสดงใน demo day ที่เมืองทองธานี"
      }
  ];

    
    const sub_stank ={
      Image_src : "stank.jpg",
      Title : "Sakan Kamootchat (Stank)",
      Text : "สวัสดีครับ ผมเรียนอยู่ในสาขา Industrial Engineering at Chulalongkorn University. \n ถึงจะไม่ตรงสายคอมแต่ก็ยังใฝ่รู้ในสายคอมอยู่สม่ำเสมอ \n FB : สตางค์ เทพเจ้าสายน้ำ"
    };

    const Array_top =[
      {
        Name : "C/C++",
        Image_src : "cpp.png"
      },
      {
        Name : "PHP",
        Image_src : "php.png"
      },
      {
        Name : "Javascript",
        Image_src : "js.png"
      },
      {
        Name : "Visual C#",
        Image_src : "c_sharp.png"
      },
      {
        Name : "ReactJS",
        Image_src : "react.png"
      },
      {
        Name : "SQL",
        Image_src : "sql.png"
      },
      {
        Name : "MongoDB (NoSQL)",
        Image_src : "mongo.png"
      }
    ];
    const Array_interest = ["Machine Learning","Image processing","Natural Language Processing","Algorithm & Data Structure"];


    return(
      <div class="w3-light-grey">
        <div className="w3-content" style={{"max-width":"1400px"}} >
          <Head Title="Sakan Blog" Say="This is blog of " Name="DarkST" />
          <div className="w3-row">
            <div className="w3-col l8 s12">
                <div>
                  <button className="w3-button w3-padding-large w3-white w3-border" onClick={()=>this.setMattayom(true)}><b>ระดับมัธยม{this.state.IsMattayom}</b></button>
                  <button className="w3-button w3-padding-large w3-white w3-border" onClick={()=>this.setMattayom(false)}><b>ระดับมหาวิทยาลัย</b></button>
                  
                </div>
              {Val_POST.map( Item => (
                (this.state.IsMattayom == Item.IsMattayom || Item.IsMattayom > 1) && <div><Content val = {Item} /><hr/></div>
              ))}
            </div>
            <div class="w3-col l4">
              <Sub_Content val = {sub_stank}/>
              <hr/>
              <Top_Content  Top = {Array_top} />
              <hr/>
              <Top_Interest Arr = {Array_interest}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/*
  val:{
    Image_src : " "
    Title : " "
    Describtion : " "
    Date : " "
    Text : " "
  }
*/

function Return(){
  return <Page />
}

export default Return;
