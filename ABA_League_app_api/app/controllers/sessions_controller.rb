class SessionsController < ApplicationController
  before_action :authorize_request, except: :login
  include CurrentUserConcern

  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json:{
        user: user
      }
    else
      render json:{
        status: 401
      }
    end
  end
  def logged_in
    if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }
    else
      render json: {
        logged_in:false
      }
  end
  def logout
    reset_session
    render json:{
      status: {
        code: 200
      }
      logged_out: true
    }
end
# class SessionsController < ApplicationController
#   def new
#   end
#   def create
#     user = User.find_by_email(params[:email])
#     if user && user.authenticate(params[:password])
#       session[:user_id] = user.id
#       redirect_to root_url, notice: "Logged in!"
#     else
#       flash.now[:alert] = "Email or password is invalid"
#       render "new"
#     end
#   end
#   def destroy
#     session[:user_id] = nil
#     redirect_to root_url, notice: "Logged out!"
#   end
# end