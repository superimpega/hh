$('body').prepend('<style type="text/css" id="plugavatar-css">#plugavatar { position: absolute; top:0; right:0; background-color: #0b0b0b; }</style><div id="plugavatar"><form id="avaform" action="javascript:"><select><option value="halloween01">Vampire M</option><option value="halloween02">Vampire F</option><option value="halloween03">Frankenstein</option><option value="halloween04">Witch</option><option value="halloween05">Skeleton M</option><option value="halloween06">Skeleton F</option><option value="halloween07">Zombie M</option><option value="halloween08">Zombie F</option><option value="halloween09">Ghost</option><option value="halloween10">Werewolf M</option><option value="halloween11">Pumpkin</option><option value="halloween12">Werewolf F</option><option value="halloween13">Undead</option></select><input type="submit" value="Go" /></form></div>');
$("#avaform").submit(function() { 
    $.ajax({
					url: "/_/gateway/room.update_options",
					type: 'POST',
					data: JSON.stringify({
						service: "user.set_avatar",
						body: [
							$("select option:selected").val()
					]
					}),
					dataType: 'json',
					contentType: 'application/json'
					}).done(function () {
					$(this).addClass("done");
					});
});
