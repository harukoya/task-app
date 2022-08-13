class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :task_list_id
end
