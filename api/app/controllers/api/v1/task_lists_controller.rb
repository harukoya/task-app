class Api::V1::TaskListsController < ApplicationController
  def index
    task_lists = TaskList.all
    render json: task_lists
  end
end
