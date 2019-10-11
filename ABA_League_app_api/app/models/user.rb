class User < ApplicationRecord
  has_secure_password
  
  EMAIL_FORMAT = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    
  validates :email, presence: true,  uniqueness: true, format: { with: EMAIL_FORMAT }

end
