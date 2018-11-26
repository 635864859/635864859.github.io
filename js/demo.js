function Login(){//onclick事件对应的Login()方法
	layer.open({ //引入弹出层插件layer.js,调用layer的open()方法，
		         //温馨提示：若引入该插件，记得在页面内写上  return false 否则弹出的页面会一闪而过
		type:1,
		title:"苏宁易购账号登陆", //弹出层显示的标题
		erea:["395px","100px"],  //设置弹出层的宽高
		content:$('#d1')    //内容为获取页面内ID名称为d1的标签，jQuery获取页面内容用 $ 获取
	});
}
function Zhuce(){  //执行页面内定义的单击事件的Zhuce()方法
	layer.open({
		type:1,
		title:"苏宁易购账号注册",
		erea:["420px","280px"],
		content:$('#d2')  //内容为获取页面内ID名称为d1的标签，jQuery获取页面内容用 $ 获取
	});

};
function Danji(){
	var B1=document.getElementById('box1'); //JavaScript定义变量用 var  定义变量B1用于获取页面内ID名称为box1的内容
	var U1=document.getElementById('ul1');
	B1.onmouseover=function(){  //当执行变量B1的onmouseover事件时，显示出变量U1获取的页面内容
		U1.style.display='block';
	};
	B1.onmouseout=function(){ //当执行变量B1的onmouseout事件时，隐藏变量U1获取的页面内容
		U1.style.display='none';
	};
};
function Danji1(){
	document.getElementById('box2').onmouseover=function(){
		document.getElementById('ul2').style.display='block';
	};
	document.getElementById('box2').onmouseout=function(){
		document.getElementById('ul2').style.display='none';
	};
};
function Danji2(){
	document.getElementById('box3').onmouseover=function(){
		document.getElementById('ul3').style.display='block';
	};
	document.getElementById('box3').onmouseout=function(){
		document.getElementById('ul3').style.display='none';
	}; 
};
   function LunboT(){
   				//获取ID名为  center-ct-two 的标签底下所有的 li 标签的内容
			    var li=document.getElementById('center-ct-two').getElementsByTagName("li");
			    var num=0;  //定义变量num并且赋初始值为 0  该变量用于存放轮播图片的个数
			    var len=li.length; //定义变量len来存放li标签的长度

			    setInterval(function(){  //用setInterval()方法来执行图片的轮播效果
			        li[num].style.display="none"; //当轮播的图片只有一张时，只显示第一张
			        num=++num==len?0:num;  //该处使用三目运算符，num=num++；意为 程序先执行，然后再相加,而num=++num； 意为先相加，在执行，
			        //num=++num==len?0:num;意为当++num成立时，即图片的个数不为1的话,就执行num,若条件不成立时，就执行num=0;这个条件
			        li[num].style.display="inline-block";  //当轮播图个数不为1的话，继续执行显示其余的额图片

			    	},900);//切换时间
   };

   $(function(){
      $("#a1").click(function(){
   		alert("您已经注册成功");
   	});
   });
   function LunboT1(){
   				//获取ID名为  center-ct-two 的标签底下所有的 li 标签的内容
			    var li=document.getElementById('ct-top').getElementsByTagName("li");
			    var num=0;  //定义变量num并且赋初始值为 0  该变量用于存放轮播图片的个数
			    var len=li.length; //定义变量len来存放li标签的长度

			    setInterval(function(){  //用setInterval()方法来执行图片的轮播效果
			        li[num].style.display="none"; //当轮播的图片只有一张时，只显示第一张
			        num=++num==len?0:num;  //该处使用三目运算符，num=num++；意为 程序先执行，然后再相加,而num=++num； 意为先相加，在执行，
			        //num=++num==len?0:num;意为当++num成立时，即图片的个数不为1的话,就执行num,若条件不成立时，就执行num=0;这个条件
			        li[num].style.display="inline-block";  //当轮播图个数不为1的话，继续执行显示其余的额图片

			    	},1000);//切换时间
   };

   function LunboT2(){
   				//获取ID名为  center-ct-two 的标签底下所有的 li 标签的内容
			    var li=document.getElementById('ct-bottom').getElementsByTagName("li");
			    var num=0;  //定义变量num并且赋初始值为 0  该变量用于存放轮播图片的个数
			    var len=li.length; //定义变量len来存放li标签的长度

			    setInterval(function(){  //用setInterval()方法来执行图片的轮播效果
			        li[num].style.display="none"; //当轮播的图片只有一张时，只显示第一张
			        num=++num==len?0:num;  //该处使用三目运算符，num=num++；意为 程序先执行，然后再相加,而num=++num； 意为先相加，在执行，
			        //num=++num==len?0:num;意为当++num成立时，即图片的个数不为1的话,就执行num,若条件不成立时，就执行num=0;这个条件
			        li[num].style.display="inline-block";  //当轮播图个数不为1的话，继续执行显示其余的额图片

			    	},1000);//切换时间
   };

function Xwc(){
 	layer.confirm('您是如何看待此页面开发用到的技术支撑的？', {
    btn: ['前端','后台'] //按钮
}, function(){
  layer.msg('肯定会有前端部分的哦！', {icon:6});
}, function(){
  layer.msg('当然也肯定会有后台的哦', {
    time: 20000, //20s后自动关闭
    btn: ['明白了', '知道了']
  });
});
};

function Tsc(){
	layer.tips('兰州工业学院软件工程学院杨海伟', '#bottom-3-1', {
   tips: [4, '#D14C92']
    });
  };
