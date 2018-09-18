# require 'pry-remote'

class API::UsersController < ApplicationController
  before_action :authenticate_user, only: [:index, :show]

  def create
    user = User.new(user_params)
    if user.save
      render json: {status: 200, user: user}
    else
      render json: {status: 400, errors: user.errors.messages}
    end
  end

  def show
  end


private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
