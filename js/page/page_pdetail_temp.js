define("page/page_pdetail_temp",function(a, b, c) {
	// js引擎模板
	var tmpHtml = '<script id="tmp_pdetail" type="text/html">' 
					+'<div id="page_pdetail" class="page_pdetail{{productInfo._id}}">'
						+'<input type="hidden" value="{{productInfo.title}}" id="wx_title_pdetail" />'
						+'<input type="hidden" value="{{productInfo.images[0]}}?imageView2/0/w/320" id="wx_imgUrl_pdetail" />'
						+'<input type="hidden" value="{{productInfo.title}}，{{productInfo.description}}" id="wx_desc_pdetail" />'
						+'{{if storeInfo.dev2 == false}}'
						+'<div class="pTop">'
							+'<a href="#page_detail" class="back"></a>'
							+'<div style="display:none;">作品详情</div>'
//							+'<a href="#page_detail" class="" id="enter_shop">'
//								+'<span id="hd_enterShop_img">'
//									+'<img src="{{storeInfo.logo}}?imageView2/0/w/320" alt="" />'
//
//								+'</span>'
//								+'进入店铺'
//							+'</a>'
						+'</div>'
						+'{{/if}}'
						+'<input type="hidden" value="作品详情 - {{productInfo.title}}" id="title_pdetail" />'
							+'<div class="main" style="padding-bottom:10px;">'
								+'<div class="pdetail">'
									+'<img src="{{productInfo.images[0]}}?imageView2/0/h/640" alt="" />'
									+'<h2 class="title">{{productInfo.title}}</h2>'
									+'{{if productInfo.description.length!=0 }}'
									+'<p id="prodesc">{{productInfo.description}}</p>'
									+'{{/if}}'
									+'{{if tags.length!=0 }}'
									+'<div class="tagarea"><img src="images/icon_Tags.png"><div id="tagscroller"><div>'
									+'{{each tags as value i}}'
									+'<span>{{value}}</span>'
									+'{{/each}}'
									+'</div></div></div>'
									+'{{/if}}'
//										+'<a href="javascript:;" style="display:block;background:#06be04;color:white;width:80px;text-align:center;border-radius:4px;position:absolute;right:0px;top:0px;" class="wxzx">微信咨询</a>'
//										+'{{each productInfo.images as value i}}'
//											+'{{if i==1 }}'
//											+'<img src="{{value}}?imageView2/0/w/640" alt="" />'
//											+'{{/if}}'
//										+'{{/each}}'	
								+'</div>'
								
								+'<a href="#page_detail" style="color:#333">'
									+'<div class="s-de pdetail">'
										
										+'<div class="s-head">{{if storeInfo.logo!=""}}'
							 			+'<img src="{{storeInfo.logo}}?imageView2/0/w/80" alt=""  />'
							 			+'{{/if}}'
							 			
							 			+'{{if storeInfo.logo==""}}'
							 			+'<img src="images/Default_Avater.jpg" alt="" />'
							 			+'{{/if}}</div>'

										+'<div>'
											+'<h2>{{storeInfo.storeName}}</h2>'
											+'{{if storeInfo.userInfo.wxNum!=""}}'
											+'<p>微信号：{{storeInfo.userInfo.wxNum}}</p>'
											+'{{/if}}'
										+'</div>'
										+'<span>'
											+'<i class="icon-angle-right"></i>'
										+'</span>'
									+'</div>'
								+'</a>'
								
								+'{{each productInfo.images as value i}}'
									+'{{if i!=0 }}'
									+'<img class="pdetailimg" src="{{value}}?imageView2/0/h/640" alt="" />'
									+'{{/if}}'
								+'{{/each}}'

								+'{{if storeInfo.dev == false}}'
					 			+'<a href="http://mzg.so/m_index.html" class="iwShop">我也要开通微名片</a>'
					 			+'{{/if}}'
					 			+'<div class="blank"></div>'
							+'</div>'
							+'{{if storeInfo.dev2 == false}}'
							+'<div class="prefooter">'
								 +'<div class="footer pf1">'
									 	+'<div>'
									 		+'<a href="javascript:;" class="wxzx">微信咨询</a>'
									 	+'</div>'
									 	+'<div>'
									 		+'<a href="javascript:;" class="wxzx" id="jptfw">查看价目表 >> </a>'
//									 		+'<img src="">'
									 	+'</div>'
								 +'</div>'
							+'</div>'
							+'{{/if}}'
					+'</div>'
				+ '</script>';
	c.exports=tmpHtml;
});