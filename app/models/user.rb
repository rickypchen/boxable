class User < ActiveRecord::Base
	# before_action :authenticate_user!
    has_many :boxes
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable,  :trackable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
