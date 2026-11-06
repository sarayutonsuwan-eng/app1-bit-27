//นำเข้า   วิว  ข้อความ  จาก   ชื่อไลบรารี่
import  {View, Text, StyleSheet,Image} from 'react-native';

 //ส่งออก เริ่มต้น ชื่อฟังก์ชั่น
export default function App(){
  return( 
    <View style={homeStyle.container}>
      {/* ใส่ข้อความ */ }
      <Text style={homeStyle.title}>Sarayut</Text>

      {/*ใส่ภาพจากไฟล์*/}
      <Image 
        source={require('@/assets/malee.jpeg')}
        style={{
            width:250,
            height: 250,
            borderRadius: 125,
            borderWidth:10,
            borderColor: "lightblack"

        }}
      />
    </View>

  )
}
//สร้างสไตส์ตกเเต่ง
const homeStyle =  StyleSheet.create({
  container:{
    backgroundColor: "green", //สีพื้นหลัง
    flex:1,//ขยายเต็มพื้นที่
  },
  title:{
    color: "white", //สีอักษร
    fontSize: 32,//ขนาดอักษร
    fontWeight: 700, // ความหนาของตัวอักษร 100-900
    fontStyle: "italic", // เอียง
    textAlign: "center"
  }


})

