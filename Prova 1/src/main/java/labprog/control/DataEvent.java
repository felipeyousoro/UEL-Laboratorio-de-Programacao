package labprog.control;

import labprog.model.*;

public class DataEvent {

  public static final int DATA_UPATED = 1;
 

  private int eventType;
  private Object data;

  public DataEvent(Object data, int eventType) {
    this.eventType = eventType;
    this.data = data;
  }

  public int getEventType() {
    return eventType;
  }

  public Object getData() {
    return data;
  }
}