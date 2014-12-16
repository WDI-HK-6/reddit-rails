class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :post

  # we don't have validations!
end
