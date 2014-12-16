class CommentsController < ApplicationController
  before_action :authenticate_user!

  def create

    # We are just creating an object. We are not talking to the database at this stage
    comment = Comment.new(
      :content => params[:content], 
      :post_id => params[:post_id],
      :user => current_user
    )

    # comment.save will talk to the database for us AND  return either TRUE or FALSE
    if comment.save
      #display
      render json: {data: comment, email: current_user.email}, status: 201
    else
      #display
    end
  end
end