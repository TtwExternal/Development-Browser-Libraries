//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fileReader/window.b2link.fileReader.single__DataURL.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
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
			file : {
				lastModified : 1505469803008
				, lastModifiedDate : Fri Sep 15 2017 19:03:23 GMT+0900 ( 대한민국 표준시 ){}
				, name : "stock_quantity_searchList.xlsx"
				, size : 1337285
				, type : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
				, webkitRelativePath : ""
			}
			, dateTime : 1506070953993
			, id : "stock_quantity_searchList.xlsx_1506070953993"
			, offset_count : 0
			, _storage_key : "::1_62612_1506070955972"
		}
	 * </code>
	 */
	var _store = {};

	/**
	 * File Data를 Parsing하는 함수;
	 * _store를 참조해 작동한다.
	 * @function
	 * @param {String} key
	 */
	window.b2link.fileReader.single__DataURL = function( key )
	{

		window.CSJLog.timeStamp( "---- [ S ] - window.b2link.fileReader.single__DataURL():void----------" );

		if( !key )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__DataURL Warning : key가 있어야 한다." );
			return;
		}

		if( !_store[ key ] )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__DataURL Warning : key 값이 잘못 됨" );
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
		// to.chunkSize = 1024 * 1024;
		// to.offset = to.offset || 0;
		// to.total_offset = parseInt( to.file.size / to.chunkSize );
		to._storage_key = key || "";

		// to.blob = to.file.slice( to.offset, to.chunkSize + to.offset );
		var reader = to.fileReader = new FileReader();
		//--------------------------------------------------;
		/*/
		var evt_abort = function( e ){
			window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__DataURL::abort():void----------" );

			reader.removeEventListener( "abort", evt_abort, false );
			reader.removeEventListener( "error", evt_error, false );
			reader.removeEventListener( "load", evt_load, false );
			reader.removeEventListener( "loadend", evt_loadend, false );
			reader.removeEventListener( "loadstart", evt_loadstart, false );
			reader.removeEventListener( "progress", evt_progress, false );

			window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__DataURL::abort():void----------" );
		};
		var evt_error = function( e ){
			window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__DataURL::error():void----------" );

			reader.removeEventListener( "abort", evt_abort, false );
			reader.removeEventListener( "error", evt_error, false );
			reader.removeEventListener( "load", evt_load, false );
			reader.removeEventListener( "loadend", evt_loadend, false );
			reader.removeEventListener( "loadstart", evt_loadstart, false );
			reader.removeEventListener( "progress", evt_progress, false );

			window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__DataURL::error():void----------" );
		};
		var evt_load = function( e ){
			window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__DataURL::load():void----------" );

			reader.removeEventListener( "abort", evt_abort, false );
			reader.removeEventListener( "error", evt_error, false );
			reader.removeEventListener( "load", evt_load, false );
			//reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__DataURL::load():void----------" );
		};
		//*/
		var evt_loadend = function( e ){
			window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__DataURL::loadend():void----------" );

			console.log( e );

			var data = reader.result;
			var dataType = data.substring( 0, data.indexOf( "base64," ) + 7 );
			var dataURL = data.replace( dataType, "" );
			// console.log( "DataType : ", dataType );
			// console.log( "DataURL : ", dataURL);
			window.b2link.fileReader.single__DataURL.upLoadFile( dataURL, key );


			//*///----------;
			// reader.removeEventListener( "abort", evt_abort, false );
			// reader.removeEventListener( "error", evt_error, false );
			// reader.removeEventListener( "load", evt_load, false );
			reader.removeEventListener( "loadend", evt_loadend, false );
			// reader.removeEventListener( "loadstart", evt_loadstart, false );
			// reader.removeEventListener( "progress", evt_progress, false );

			to.fileReader = null;
			reader = null;

			//*///----------;

			window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__DataURL::loadend():void----------" );
		};
		/*/
		var evt_loadstart = function( e ){
			//window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__DataURL::loadstart():void----------" );

			//reader.removeEventListener( "abort", evt_abort, false );
			//reader.removeEventListener( "error", evt_error, false );
			//reader.removeEventListener( "load", evt_load, false );
			//reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			//window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__DataURL::loadstart():void----------" );
		};
		var evt_progress = function( e ){
			//window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__DataURL::progress():void----------" );

			//reader.removeEventListener( "abort", evt_abort, false );
			//reader.removeEventListener( "error", evt_error, false );
			//reader.removeEventListener( "load", evt_load, false );
			//reader.removeEventListener( "loadend", evt_loadend, false );
			//reader.removeEventListener( "loadstart", evt_loadstart, false );
			//reader.removeEventListener( "progress", evt_progress, false );

			//window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__DataURL::progress():void----------" );
		};
		//*/
		//--------------------------------------------------;

		// reader.addEventListener( "abort", evt_abort, false, 0, true );
		// reader.addEventListener( "error", evt_error, false, 0, true );
		// reader.addEventListener( "load", evt_load, false, 0, true );
		reader.addEventListener( "loadend", evt_loadend, false, 0, true );
		// reader.addEventListener( "loadstart", evt_loadstart, false, 0, true );
		// reader.addEventListener( "progress", evt_progress, false, 0, true );

		reader.readAsDataURL( to.file );

		window.CSJLog.timeStamp( "---- [ E ] - window.b2link.fileReader.single__DataURL():void----------" );
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
	window.b2link.fileReader.single__DataURL.addEvent = function( el_input, el_button )
	{
		window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__DataURL.addEvent():void----------" );

		var keyInfo = { key : "" };
		var _storeInfo;

		var evt_change = function( e ){
			el_input.removeEventListener( "change", arguments.callee, false );

			_storeInfo = window.b2link.fileReader.single__DataURL._evt_change__Input_File( e );
			keyInfo.key = _storeInfo.key

			if( _storeInfo.fileSize > 1024 * 1024 * 2 )
			{
				//error message 달기;
				window.TtwLog.warn( "window.b2link.fileReader.single__DataURL._evt_change__Input_File : 파일이 2MB 이상입니다." );
				return;
			}

			el_button.addEventListener( "click", function( e ){

				el_button.removeEventListener( "click", arguments.callee, false );
				window.b2link.fileReader.single__DataURL( keyInfo.key );
			}, false, 0, true );
		};

		el_input.addEventListener( "change", evt_change, false, 0, true );

		window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__DataURL.addEvent():void----------" );
	};

	/**
	 * @function
	 * @param {HTMLElement} el_input
	 * @param {HTMLElement} el_button
	 */
	window.b2link.fileReader.single__DataURL.removeEvent = function( el_input, el_button )
	{
		window.CSJLog.timeStamp( "----- [ S ] - window.b2link.fileReader.single__DataURL.removeEvent():void----------" );

		window.CSJLog.timeStamp( "----- [ E ] - window.b2link.fileReader.single__DataURL.removeEvent():void----------" );
	};

	/**
	 * <INPUT type="file">의 데이터를 가져오는 함수 - _store[key]의 기초데이터를 작성한다.
	 * @function
	 * @param {ChangeEvent} e
	 * @example
	 * <code>
		onchange="window.b2link.fileReader.single__DataURL.evt_change__Input_File( event );"
		또는
		inputElement.addEventListener( "change", window.b2link.fileReader.single__DataURL.evt_change__Input_File, false, 0, true );
		로 이용한다.

		구동을 위한 Click 버튼은 window.b2link.fileReader.single__DataURL(); 로 사용한다.

		<div class="ui action input">
			<input type="file" placeholder="Search..." onchange="window.b2link.fileReader.single__DataURL.evt_change__Input_File( event );">
			<button class="ui button" onclick="window.b2link.fileReader.single__DataURL();">Upload</button>
		</div>
	 * </code>
	 * @return {String} key
	 */
	window.b2link.fileReader.single__DataURL._evt_change__Input_File = function( e )
	{
		window.CSJLog.timeStamp( "------ [ S ] - window.b2link.fileReader.single__DataURL._evt_change__Input_File():{String}----------" );

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
			};
		}

		window.CSJLog.timeStamp( "------ [ E ] - window.b2link.fileReader.single__DataURL._evt_change__Input_File():{String}----------return key;" );
		return { fileSize : file.size, key : key };
	};


	/**
	 * textAsDataURL로 파싱된 데이터를 라우터에 Request 하는 함수;
	 * @param  {String} params
	 * @param  {String} _storage_key
	 */
	window.b2link.fileReader.single__DataURL.upLoadFile =  function( params, key ){

		if( !key )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__DataURL Warning : key가 있어야 한다." );
			return;
		}

		if( !_store[ key ] )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__DataURL Warning : key 값이 잘못 됨" );
			return;
		}

		var host = window.b2link.url.getServerURLByServers( "SYS0010_APIServer" );

		//Target Object;
		var to = _store[ key ];

		var url = host + "/file/single_sync/upload_textAsdataURL?"
			+ "_storage_key=" + to._storage_key
			+ "&file_id=" + to.id
			+ "&fileNm=" + to.file.name
			+ "&totalBytes=" + to.file.size;

		window.b2link_service.common._fn_req_POST__Str( url, params, { "Content-type" : "application/x-www-form-urlencoded" }//,...
			/*/
			, {
				onabort : function( e ){ console.log( "---------- onabort ----------" ); console.log( e ); }
				, onerror : function( e ){ console.log( "---------- onerror ----------" ); console.log( e ); }
				, onload : function( e ){ console.log( "---------- onload ----------" ); console.log( e ); }
				, onloadend : function( e ){ console.log( "---------- onloadend ----------" ); console.log( e ); }
				, onstart : function( e ){ console.log("---------- onstart ----------" ); console.log( e ); }
				, onprogress : function( e ){ console.log( "---------- onprogress ----------" ); console.log( e ); }
				, onreadystatechange : function( e ){ console.log( "---------- onreadystatechange ----------" );
					//console.log( e );
					if (e.readyState == 4 && e.status == 200)
					{
						var r = e.responseText;
						console.log( r ,"FileUpload_End!")
						fileDataInfo = {};//스토리지초기화;
						target_file_key = null;
					}
					else
					{
						console.log('readyState=' + e.readyState + ', status: ' + e.status);
					}

				}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
				, ontimeout : function( e ){ console.log( "---------- ontimeout ----------" ); console.log( e ); }
			}/*/
			, function( result ){
				window.CSJLog.timeStamp( "------ [ S ] - window.b2link.fileReader.single__DataURL.upLoadFile::res():void----------" );

				if( !window.b2link.response.getResultStatus( result ) )
				{
					var a = window.smt_ui.message.error.modal();
					var elc = a[ 1 ];
						elc.headerText = "파일 업로더 에러";
						elc.messageText = "업로드 실패 - 몰러";

					return;
				}

				console.log( "FileUpload_End!")
				to = {};//스토리지초기화;
				return;

				window.CSJLog.timeStamp( "------ [ E ] - window.b2link.fileReader.single__DataURL.upLoadFile::res():void----------" );
			}
			//*/
		);
	}

	/**
	 * textAsDataURL로 파싱된 데이터를 라우터에 Request 하는 함수;
	 * @param  {String} params
	 * @param  {String} _storage_key
	 */
	window.b2link.fileReader.single__DataURL.upLoadFileBinary =  function( params, key ){

		if( !key )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__DataURL Warning : key가 있어야 한다." );
			return;
		}

		if( !_store[ key ] )
		{
			window.TtwLog.warn( "window.b2link.fileReader.single__DataURL Warning : key 값이 잘못 됨" );
			return;
		}

		var host = window.b2link.url.getServerURLByServers( "SYS0010_APIServer" );

		//Target Object;
		var to = _store[ key ];

		var url = host + "/file/single_sync/upload_textAsdataURL?"
			+ "_storage_key=" + to._storage_key
			+ "&file_id=" + to.id
			+ "&fileNm=" + to.file.name
			+ "&totalBytes=" + to.file.size;

		window.b2link_service.common._fn_req_POST__ArrayBuffer( url, params, { "Content-type" : "application/x-www-form-urlencoded" }//,...
			/*/
			, {
				onabort : function( e ){ console.log( "---------- onabort ----------" ); console.log( e ); }
				, onerror : function( e ){ console.log( "---------- onerror ----------" ); console.log( e ); }
				, onload : function( e ){ console.log( "---------- onload ----------" ); console.log( e ); }
				, onloadend : function( e ){ console.log( "---------- onloadend ----------" ); console.log( e ); }
				, onstart : function( e ){ console.log("---------- onstart ----------" ); console.log( e ); }
				, onprogress : function( e ){ console.log( "---------- onprogress ----------" ); console.log( e ); }
				, onreadystatechange : function( e ){ console.log( "---------- onreadystatechange ----------" );
					//console.log( e );
					if( e.readyState == 4 && e.status == 200 )
					{
						var r = e.responseText;
						console.log( r ,"FileUpload_End!" );
						fileDataInfo = {};//스토리지초기화;
						target_file_key = null;
					}
					else
					{
						console.log('readyState=' + e.readyState + ', status: ' + e.status);
					}

				}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
				, ontimeout : function( e ){ console.log( "---------- ontimeout ----------" ); console.log( e ); }
			}/*/
			, function( result ){
				window.CSJLog.timeStamp( "------ [ S ] - window.b2link.fileReader.single__DataURL.upLoadFile::res():void----------" );

				if( !window.b2link.response.getResultStatus( result ) )
				{
					var a = window.smt_ui.message.error.modal();
					var elc = a[ 1 ];
						elc.headerText = "파일 업로더 에러";
						elc.messageText = "업로드 실패 - 몰러";

					return;
				}

				console.log( "FileUpload_End!" );
				to = {};//스토리지초기화;
				return;

				window.CSJLog.timeStamp( "------ [ E ] - window.b2link.fileReader.single__DataURL.upLoadFile::res():void----------" );
			}
			//*/
		);
	}
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;