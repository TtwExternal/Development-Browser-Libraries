//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fileReader/window.b2link.fileReader.single__ArrayBuffer.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
/*/
//브라우저 메모리 감지하기;
setInterval( function(){
	var m = window.console.memory;
	var msg = "totalJSHeapSize : " + m.totalJSHeapSize
		+ "\nusedJSHeapSize : " + m.usedJSHeapSize;
	window.b2link_ui.message.message( msg );
}, 1000 );
//*/
(function(){

	/**
	 * 파일을 업로드 하기위해 정보를 저장하는 변수;
	 * @property {Object}
	 * <code>
		{
			"1507788089551": {
				"file":	{
					lastModified : 1499849314265
					, lastModifiedDate : Wed Jul 12 2017 17:48:34 GMT+0900 (대한민국 표준시)
					, name : "visualcppbuildtools_full.exe"
					, size : 3287928
					, type : "application/x-msdownload"
					, webkitRelativePath : ""
				},
				"dateTime":	1507788089551,
				"id": "visualcppbuildtools_full.exe_1507788089551",
				"offset_count":	0,
				"chunkSize": 524288,
				"offset": 524288,
				"total_offset":	6,
				"_storage_key":	1507788089551,
				"blob":	{
					size : 123123123
					, type : ""
				},
				"fileReader": { fileReader }
			}
		}
	 * </code>
	 */
	var _store = {};

	/*/
	API List

	window.b2link.fileReader.single__ArrayBuffer = function( key )

	window.b2link.fileReader.single__ArrayBuffer.upLoadFile = function( params, key )

	window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary = function( params, key )

	window.b2link.fileReader.single__ArrayBuffer.openFile = function( event )
	//*/

	/**
	 * File Data를 Parsing하는 함수;
	 * _store를 참조해 작동한다.
	 * @function
	 * @param {String} key
	 */
	window.b2link.fileReader.single__ArrayBuffer = function( key )
	{
		window.CSJLog.timeStamp( "---- [ S ] - window.b2link.fileReader.single__ArrayBuffer():void----------" );

		if( !key )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__ArrayBuffer Warning : key가 있어야 한다." );
			return;
		}

		if( !_store[ key ] )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__ArrayBuffer Warning : key 값이 잘못 됨" );
			return;
		}

		//Target Object;
		var to = _store[ key ];

		if( !to.file )
		{
			console.log( "File not exist" );
			return;
		}

		//--------------------------------------------------;
		//to.chunkSize = 1024 * 1024 / 2;//500Kb;
		//to.chunkSize = 1024 * 1024 * 1;//1Mb;
		//to.chunkSize = 1024 * 1024 * 2;//2Mb;
		//to.chunkSize = 1024 * 1024 * 3;//3Mb;
		//to.chunkSize = 1024 * 1024 * 4;//4Mb;
		//to.chunkSize = 1024 * 1024 * 5;//5Mb;
		to.chunkSize = 1024 * 1024 * 50;//50Mb;
		to.offset = to.offset || 0;
		to.total_offset = parseInt( to.file.size / to.chunkSize );
		to._storage_key = key || "";

		to.blob = to.file.slice( to.offset, to.chunkSize + to.offset );
		var reader = to.fileReader;
		//--------------------------------------------------;
		/*/
		var evt_abort = function( e ){
			window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__ArrayBuffer::abort():void----------" );

			reader.removeEventListener( "abort", evt_abort, false );
			reader.removeEventListener( "error", evt_error, false );
			reader.removeEventListener( "load", evt_load, false );
			reader.removeEventListener( "loadend", evt_loadend, false );
			reader.removeEventListener( "loadstart", evt_loadstart, false );
			reader.removeEventListener( "progress", evt_progress, false );

			window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__ArrayBuffer::abort():void----------" );
		};
		var evt_error = function( e ){
			window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__ArrayBuffer::error():void----------" );

			reader.removeEventListener( "abort", evt_abort, false );
			reader.removeEventListener( "error", evt_error, false );
			reader.removeEventListener( "load", evt_load, false );
			reader.removeEventListener( "loadend", evt_loadend, false );
			reader.removeEventListener( "loadstart", evt_loadstart, false );
			reader.removeEventListener( "progress", evt_progress, false );

			window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__ArrayBuffer::error():void----------" );
		};
		var evt_load = function( e ){
			window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__ArrayBuffer::load():void----------" );

			reader.removeEventListener( "abort", evt_abort, false );
			reader.removeEventListener( "error", evt_error, false );
			reader.removeEventListener( "load", evt_load, false );
			//reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__ArrayBuffer::load():void----------" );
		};
		//*/

		var evt_loadend = function( e ){
			window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__ArrayBuffer::loadend():void----------" );

			console.log( e );

			/*/
			var s = new Uint8Array( reader.result );
			to.offset += s.length;
			/*/
			to.offset += reader.result.byteLength;
			//*/

			console.log( to.offset + "/" + to.file.size + " -- " + to.offset_count );
			//var update_progress = ( to.offset / to.file.size ) * 100;

			//window.b2link.fileReader.single__ArrayBuffer.upLoadFile( s.join( "," ), key );
			//window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary( s, key );
			window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary( reader.result, key );

			//*///----------;
			//reader.removeEventListener( "abort", evt_abort, false );
			//reader.removeEventListener( "error", evt_error, false );
			//reader.removeEventListener( "load", evt_load, false );
			reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			//debugger;

			//이하 객체들을 정상적으로 dispose 할수있는 방법이 있는지 검색 해봐야 함;
			reader.result.byteLength = 0;
			//reader.result.byteLength = null;

			//to.fileReader = null;

			reader = null;

			//s.length = 0;
			//s = null;

			to.blob = null;

			//*///----------;

			window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__ArrayBuffer::loadend():void----------" );
		};
		/*/
		var evt_loadstart = function( e ){
			//window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__ArrayBuffer::loadstart():void----------" );

			//reader.removeEventListener( "abort", evt_abort, false );
			//reader.removeEventListener( "error", evt_error, false );
			//reader.removeEventListener( "load", evt_load, false );
			//reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			//window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__ArrayBuffer::loadstart():void----------" );
		};
		var evt_progress = function( e ){
			//window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__ArrayBuffer::progress():void----------" );

			//reader.removeEventListener( "abort", evt_abort, false );
			//reader.removeEventListener( "error", evt_error, false );
			//reader.removeEventListener( "load", evt_load, false );
			//reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			//window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__ArrayBuffer::progress():void----------" );
		};
		//*/
		//--------------------------------------------------;

		//reader.addEventListener( "abort", evt_abort, false, 0, true );
		//reader.addEventListener( "error", evt_error, false, 0, true );
		//reader.addEventListener( "load", evt_load, false, 0, true );
		reader.addEventListener( "loadend", evt_loadend, false, 0, true );
		//reader.addEventListener( "loadstart", evt_loadstart, false, 0, true );
		//reader.addEventListener( "progress", evt_progress, false, 0, true );

		reader.readAsArrayBuffer( to.blob );

		window.CSJLog.timeStamp( "---- [ E ] - window.b2link.fileReader.single__ArrayBuffer():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	EVENT - addEvent***, removeEvent*** 셋트 배치 후 알파벳 순 정렬;
	//	- Callback를 정의하는 곳이 아님.
	//	- dispatchEvent로 인하여 EventType에 의거해서 구동될 EventListenr만 정의 하는 구역임
	//	- Common Interface
	//	_addEvent : 이 객체에서 addEventListener를 정의 한다.
	//	_removeEvent : 이 객체에서 removeEventListener를 정의 한다.

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {HTMLElement} el_input
	 * @param {HTMLElement} el_button
	 */
	window.b2link.fileReader.single__ArrayBuffer.addEvent = function( el_input, el_button, cbComplete )
	{
		window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__ArrayBuffer.addEvent():void----------" );

		var keyInfo = { key : "" };

		var evt_change = function( e ){
			el_input.removeEventListener( "change", arguments.callee, false );

			keyInfo.key = window.b2link.fileReader.single__ArrayBuffer._evt_change__Input_File( e, cbComplete );

			el_button.addEventListener( "click", function( e ){

				el_button.removeEventListener( "click", arguments.callee, false );

				window.b2link.fileReader.single__ArrayBuffer( keyInfo.key );
			}, false, 0, true );
		};

		el_input.addEventListener( "change", evt_change, false, 0, true );
		window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__ArrayBuffer.addEvent():void----------" );
	};

	/**
	 * @function
	 * @param {HTMLElement} el_input
	 * @param {HTMLElement} el_button
	 */
	window.b2link.fileReader.single__ArrayBuffer.removeEvent = function( el_input, el_button )
	{
		window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__ArrayBuffer.removeEvent():void----------" );

		window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__ArrayBuffer.removeEvent():void----------" );
	};

	/**
	 * <INPUT type="file">의 데이터를 가져오는 함수 - _store[key]의 기초데이터를 작성한다.
	 * @function
	 * @param {ChangeEvent} e
	 * @example
	 * <code>
		onchange="window.b2link.fileReader.single__ArrayBuffer.evt_change__Input_File( event );"
		또는
		inputElement.addEventListener( "change", window.b2link.fileReader.single__ArrayBuffer.evt_change__Input_File, false, 0, true );
		로 이용한다.

		구동을 위한 Click 버튼은 window.b2link.fileReader.single__ArrayBuffer(); 로 사용한다.

		<div class="ui action input">
			<input type="file" placeholder="Search..." onchange="window.b2link.fileReader.single__ArrayBuffer.evt_change__Input_File( event );">
			<button class="ui button" onclick="window.b2link.fileReader.single__ArrayBuffer();">Upload</button>
		</div>
	 * </code>
	 * @return {String} key
	 */
	window.b2link.fileReader.single__ArrayBuffer._evt_change__Input_File = function( e, cbComplete )
	{
		window.CSJLog.timeStamp( "------ [ S ] - window.b2link.fileReader.single__ArrayBuffer._evt_change__Input_File():{String}----------" );

		var el = e.target;//INPUT Element;

		var file = el.files[ 0 ];//Selected Files;

		var key = Date.now();

		if( !_store[ key ] )
		{
			_store[ key ] = {
				file : file
				, dateTime : key
				, id : file.name + "_" + key
				, offset_count : 0
				, complete : cbComplete

				, fileReader : new FileReader()
				, requestHeaders : { "Content-type" : "application/x-www-form-urlencoded" }
				, xhr : new XMLHttpRequest()
			};
		}

		window.CSJLog.timeStamp( "------ [ E ] - window.b2link.fileReader.single__ArrayBuffer._evt_change__Input_File():{String}----------return key;" );
		return key;
	};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION - 알파벳 순 정렬;
	//	- Common Interface
	//	_dispose : 이 객체의 removeEvent를 실행하고 이 객체가 보유한 dispose가 있는 인스턴스들의 dispose를 호출해준다.

	//----------------------------------------------------------------------------------------------------;

	/**
	 * readAsArrayBuffer 파싱된 데이터를 라우터에 Request 하는 함수;
	 * @function
	 * @param {String} params FileData ArrayBuffer 문자열
	 * @param {String} key
	 */
//	window.b2link.fileReader.single__ArrayBuffer.upLoadFile = function( params, key )
//	{
//		window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__ArrayBuffer.upLoadFile():void----------" );
//
//		if( !key )
//		{
//			window.TtwLog.warn( "window.b2link.fileReader.single__ArrayBuffer Warning : key가 있어야 한다." );
//			return;
//		}
//
//		if( !_store[ key ] )
//		{
//			window.TtwLog.warn( "window.b2link.fileReader.single__ArrayBuffer Warning : key 값이 잘못 됨" );
//			return;
//		}
//
//		var host = window.b2link.url.getServerURLByServers( "SYS0010_APIServer" );
//
//		//Target Object;
//		var to = _store[ key ];
//
//		var url = host + "/file/single_sync/upload_readAsArrayBuffer?"
//			+ "_storage_key=" + to._storage_key
//			+ "&file_id=" + to.id
//			+ "&fileNm=" + to.file.name
//			+ "&offset=" + to.offset_count
//			+ "&total_offset=" + to.total_offset
//			+ "&totalBytes=" + to.file.size;
//
//		window.b2link_service.common._fn_req_POST__Str( url, params, { "Content-type" : "application/x-www-form-urlencoded" }
//			/*/
//			, {
//				onabort : function( e ){ console.log( "---------- onabort ----------" ); console.log( e ); }
//				, onerror : function( e ){ console.log( "---------- onerror ----------" ); console.log( e ); }
//				, onload : function( e ){ console.log( "---------- onload ----------" ); console.log( e ); }
//				, onloadend : function( e ){ console.log( "---------- onloadend ----------" ); console.log( e ); }
//				, onstart : function( e ){ console.log( "---------- onstart ----------" ); console.log( e ); }
//				, onprogress : function( e ){ console.log( "---------- onprogress ----------" ); console.log( e ); }
//				, onreadystatechange : function( e ){ console.log( "---------- onreadystatechange ----------" );
//					//console.log( e );
//					if ( e.readyState == 4 && e.status == 200 )
//					{
//						var r = JSON.parse( e.responseText );
//
//						++to.offset_count;
//
//						to._storage_key = r._storage_key;
//
//						if( r.isEnd == 1 )
//						{
//							console.log( "FileUload_end!" );
//							to = {};//스토리지초기화;
//							return;
//						}
//
//						if( r ) window.b2link.fileReader.single__ArrayBuffer( r._storage_key );
//
//					}
//					else
//					{
//						console.log( 'readyState=' + e.readyState + ', status: ' + e.status );
//					}
//
//				}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
//				, ontimeout : function( e ){ console.log( "---------- ontimeout ----------" ); console.log( e ); }
//			}
//			/*/
//			, function( result ){
//				window.CSJLog.timeStamp( "------ [ S ] - window.b2link.fileReader.single__ArrayBuffer.upLoadFile::res():void----------" );
//
//				if( !window.b2link.response.getResultStatus( result ) )
//				{
//					var a = window.smt_ui.message.error.modal();
//					var elc = a[ 1 ];
//						elc.headerText = "파일 업로더 에러";
//						elc.messageText = "업로드 실패 - 몰러";
//
//					return;
//				}
//
//				++to.offset_count;
//				to._storage_key = result._storage_key;
//
//				//파일 업로드 완료;
//				if( 1 == result.isEnd )
//				{
//					console.log( "FileUload_end!" );
//					to = {};//스토리지초기화;
//					return;
//				}
//
//				/*///메모리 릭 때문에 시간 주기;
//				window.b2link.fileReader.single__ArrayBuffer( result._storage_key );
//				/*/
//				setTimeout(function(){ window.b2link.fileReader.single__ArrayBuffer( result._storage_key ); }, 100 );
//				//*/
//
//				window.CSJLog.timeStamp( "------ [ E ] - window.b2link.fileReader.single__ArrayBuffer.upLoadFile::res():void----------" );
//			}
//			//*/
//		);
//
//		window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__ArrayBuffer.upLoadFile():void----------" );
//	};

	/**
	 * readAsArrayBuffer 파싱된 데이터를 라우터에 Request 하는 함수;
	 * @function
	 * @param {String} params FileData ArrayBuffer 문자열
	 * @param {String} key
	 */
	window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary = function( params, key )
	{
		window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary():void----------" );

		if( !key )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__ArrayBuffer Warning : key가 있어야 한다." );
			return;
		}

		if( !_store[ key ] )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__ArrayBuffer Warning : key 값이 잘못 됨" );
			return;
		}

		var host = window.b2link.url.getServerURLByServers( "SYS0010_APIServer" );

		//Target Object;
		var to = _store[ key ];

		var url = host + "/file/single_sync/upload_readAsArrayBuffer?"
			+ "_storage_key=" + to._storage_key
			+ "&file_id=" + to.id
			+ "&fileNm=" + to.file.name
			+ "&offset=" + to.offset_count
			+ "&total_offset=" + to.total_offset
			+ "&totalBytes=" + to.file.size;

		//window.b2link_service.common._fn_req_POST__ArrayBuffer( url, params, { "Content-type" : "application/x-www-form-urlencoded" }
		window.b2link_service.common._fn_req_POST__ArrayBuffer__Ref( to.xhr, url, params, to.requestHeaders
			, function( result ){
				window.CSJLog.timeStamp( "------ [ S ] - window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary::res():void----------" );

				if( !window.b2link.response.getResultStatus( result ) )
				{
					var a = window.smt_ui.message.error.modal();
					var elc = a[ 1 ];
						elc.headerText = "파일 업로더 에러";
						elc.messageText = "업로드 실패 - 몰러";

					return;
				}

				++to.offset_count;
				//to._storage_key = result._storage_key;

				//파일 업로드 완료;
				if( 1 == result.isEnd )
				{
					console.log( "FileUload_end!" );

					//수정하기 초기화를 dispose 함수로 뜯어서 디테일하게 진행하기;
					//스토리지초기화;
					//*/
					to.complete();

					to.file = null;
					to.fileReader = null;
					to.xhr = null;

					to = {};
					/*/
					window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary.dispose( key );

					//*/

					return;
				}

				/*///메모리 릭 때문에 시간 주기;
				window.b2link.fileReader.single__ArrayBuffer( result._storage_key );
				/*/
				setTimeout(function(){ window.b2link.fileReader.single__ArrayBuffer( key ); }, 100 );
				//*/

				window.CSJLog.timeStamp( "------ [ E ] - window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary::res():void----------" );
			}
			//*/
		);

		window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary():void----------" );
	};

	/**
	* 스토리지 및 기타 데이터들을 초기화하는 함수
	* @param {String} key 스토리지의 키값
	*/
	window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary.dispose = function( el )
	{
		window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary.dispose():void----------" );

		window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__ArrayBuffer.upLoadFileBinary.dispose():void----------" );
	};


})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;