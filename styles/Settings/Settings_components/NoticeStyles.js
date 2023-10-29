import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    container_in: {
        flex: 1,
        backgroundColor: 'white',
    },
    notice_container_list: {
        backgroundColor: '#ffffff',
        width:'100%',
        height:100,
        borderWidth:0,
        borderBottomWidth:0.2,
        borderColor:'#f1f1f1',
        justifyContent:"center",
        alignItems:'flex-start',
        paddingLeft:20,
    },
    notice_list_new_text:{
        fontSize:12,
        marginRight:7,
        color:'#d53333',
        fontFamily:'mainFont',
    },
    notice_list_type_text:{
        fontSize:12,
        fontFamily:"mainFont",
        marginBottom:5,
    },
    notic_list_title_text:{
        fontSize:17,
        fontFamily:"mainFont",
        color:"#5e5e5e",
    },
    notice_list_date_text:{
        fontSize:14,
        marginTop:5,
        color:"#949494",
    },
    notice_detial_box:{
        height:90,
        width:'100%',
        justifyContent:"center",
        alignItems:"flex-start",
        paddingLeft:30,
        paddingRight:30,
    },
    notice_detial_title_text:{
        fontSize:17,
        color:"#3d3a3a",
        textAlign:"left"
    },
    notice_detial_date_text:{
        fontSize:14,
        marginTop:10,
        color:"#949494",
    },
    notice_detia_line:{
        width:'100%',
        borderColor:'#e1e1e1',
        borderBottomWidth:0.5,
        height:15,
    },
    notice_detial_content_box:{
        flex:1,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:5,
        paddingBottom:70,
    },
    notice_detial_content_box_in:{
        flex:1,
    },
    notice_detial_content_text:{

    }
});