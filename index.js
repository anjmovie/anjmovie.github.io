let token;

$(document).ready(function(){
	token=55829007;

	if( token==null || token==""){
		alert("token invalid");
	}	

	else{

		getAllDetails();
	}


});


let getAllDetails = () => {

	var $inputwindow=$('#inputwindow');
	var $title=$("#title");
	var $imdbid=$("#imdbid");



  $("#submit").on('click',function(){
   $(this).prop("disabled", true);
	var title= $title.val();
	var imdbid=$imdbid.val();
	$("#outputwindow").css("display","block");
       if(title!=null){

			$.ajax({
				type : 'GET',
				dataType : 'JSON',
				async : true,
				url : 'http://www.omdbapi.com/?t='+title+'&apikey='+token,

				success : (response) => {

								
								if(response.Response == "False"){
									alert("Valid movie name would help me a lot...cheers!!");
								}
							
							$("#title_o").append(response.Title);
							$("#year_o").append(response.Year);
							$("#rated_o").append(response.Rated);
							$("#released_o").append(response.Released);
							$("#runtime_o").append(response.Runtime);
							$("#genre_o").append(response.Genre);
							$("#director_o").append(response.Director);
							$("#writer_o").append(response.Writer);
							$("#actors_o").append(response.Actors);
							$("#plot_o").append(response.Plot);
							$("#language_o").append(response.Language);
							$("#country_o").append(response.Country);
							$("#awards_o").append(response.Awards);
							$("#poster_o").html('<img src="' + response.Poster + '"  class="img-fluid profileHeight"/>');							$("#ratings_o").append(response.Ratings);
							$("#metascore_o").append(response.Metascore);
							$("#imdbrating_o").append(response.imdbRating);
							$("#imdbvotes_o").append(response.imdbVotes);
							$("#imdbid_o").append(response.imdbID);
							$("#type_o").append(response.Type);
							$("#dvd_o").append(response.DVD);
							$("#boxoffice_o").append(response.BoxOffice);
							$("#production_o").append(response.Production);
							$("#website_o").html('<a href=" ' + response.Website + '">'+response.Website+'</a>');
							$("#response_o").append(response.Response);

							},

				error : (err) =>{
					console.log(err.Message);
				}
			});
		}

		if(imdbid!=null){

			$.ajax({

				type : 'GET',
				dataType : 'JSON',
				async : true,
				url : 'http://www.omdbapi.com/?i='+imdbid+'&apikey='+token,
				success : function(response){
							
							
							$("#title_o").append(response.Title);
							$("#year_o").append(response.Year);
							$("#rated_o").append(response.Rated);
							$("#released_o").append(response.Released);
							$("#runtime_o").append(response.Runtime);
							$("#genre_o").append(response.Genre);
							$("#director_o").append(response.Director);
							$("#writer_o").append(response.Writer);
							$("#actors_o").append(response.Actors);
							$("#plot_o").append(response.Plot);
							$("#language_o").append(response.Language);
							$("#country_o").append(response.Country);
							$("#awards_o").append(response.Awards);
							$("#poster_o").html('<img src="' + response.Poster + '"  class="img-fluid profileHeight"/>');
							$("#ratings_o").append(response.Ratings);
							$("#metascore_o").append(response.Metascore);
							$("#imdbrating_o").append(response.imdbRating);
							$("#imdbvotes_o").append(response.imdbVotes);
							$("#imdbid_o").append(response.imdbID);
							$("#type_o").append(response.Type);
							$("#dvd_o").append(response.DVD);
							$("#boxoffice_o").append(response.BoxOffice);
							$("#production_o").append(response.Production);
							$("#website_o").append(response.Website);
							$("#response_o").append(response.Response);

								
						},

						error : (err) =>{
					             console.log(err.Message);
				                  }



			});

		}


});



}
