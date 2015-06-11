class User < ActiveRecord::Base
	before_action :authenticate_user!

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable,  :trackable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
