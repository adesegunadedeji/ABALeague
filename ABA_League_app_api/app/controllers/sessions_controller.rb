class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user_id
      render json: 
      {
        status: {
          code: 201
        },
        data: user
      }
      redirect_to root_url, notice: "Logged in!"
    else
      flash.now[:alert] = "Email or password is invalid"
      render json:{
        status: {
          code: 401 #Unauthorized Code
        }
      }
    end
  end
  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Logged out!" 
  end
end

#Research Fromhttps://medium.com/@wintermeyer/authentication-from-scratch-with-rails-5-2-92d8676f6836